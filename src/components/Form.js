import React, { useRef, useState } from "react";
import { LOGIN_BACKGROUND_IMAGE, USER_PROFILE_IMAGE, ASSETS } from "../utils/constant";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Form = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [rememberCheck, setRememberCheck] = useState(true);
  const [errMessage, setErrMessage] = useState(null);
  const [loading, setloading] = useState(false);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  const toggleSignInForm = () => setIsSignInForm(!isSignInForm);
  const changeRememberBox = () => setRememberCheck(!rememberCheck);

  const handleButtonClick = () => {
    // Form Data Validation
    const msg = isSignInForm
      ? checkValidData(null, email.current.value, password.current.value)
      : checkValidData(name.current.value, email.current.value, password.current.value);
    setErrMessage(msg);

    if (msg) return;

    setloading(true);

    if (!isSignInForm) {
      // ---------- Sign Up Logic ----------
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          // Updating User's Profile
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_PROFILE_IMAGE,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

              // Profile updated!
            })
            .catch((error) => {
              setErrMessage(error.message);
            });

          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // setErrMessage("Email already in use.");
          setErrMessage(`${errorCode}: ${errorMessage}`);
        })
        .finally(() => setloading(false));
    } else {
      // ---------- Sign In Logic ----------
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // setErrMessage("Invalid Credential");
          setErrMessage(`${errorCode}: ${errorMessage}`);
        })
        .finally(() => setloading(false));
    }
  };

  return loading ? (
    <div className="w-[100%] h-screen flex items-center justify-center">
      <img src={ASSETS.spinner} alt="loading-spinner" />
    </div>
  ) : (
    <div>
      <div className="absolute inset-0">
        <img className="object-cover w-full h-full" src={LOGIN_BACKGROUND_IMAGE} alt="login-background-image" />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-45">
        <div className="w-full max-w-md md:w-[30rem] h-[35rem] flex flex-col items-center justify-center p-6">
          {/* ----------- FORM HANDLING ----------- */}
          <form
            onSubmit={onSubmitHandler}
            className="flex flex-col w-full bg-black bg-opacity-75 px-12 py-20 rounded-lg"
          >
            <h1 className="text-white font-bold text-[35px] mb-12">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

            {!isSignInForm && (
              <input
                ref={name}
                className="border border-gray-400 rounded-lg px-4 py-2 mb-3 bg-gray-400 bg-opacity-15 text-white"
                type="text"
                placeholder="Full Name"
                required
              />
            )}

            <input
              ref={email}
              className="border border-gray-400 rounded-lg px-4 py-2 mb-3 bg-gray-400 bg-opacity-15 text-white"
              type="email"
              placeholder="Email Address"
              required
            />
            <input
              ref={password}
              className="border border-gray-400 rounded-lg px-4 py-2 mb-3 bg-gray-400 bg-opacity-15 text-white"
              type="password"
              placeholder="Password"
              required
            />

            <p className="text-red-600 mb-3">{errMessage}</p>
            <button
              onClick={handleButtonClick}
              className={`text-white border  rounded-lg font-semibold py-2 mb-3 ${
                isSignInForm ? "border-red-700 bg-red-700" : "border-green-700 bg-green-700"
              }`}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>

            {isSignInForm && (
              <>
                <p className="text-white text-center mb-2">Forgot Password?</p>
                <div className="flex items-center space-x-2 py-2">
                  <input type="checkbox" id="remember" checked={rememberCheck} onChange={changeRememberBox} />
                  <label className="text-white" htmlFor="remember">
                    Remember Me
                  </label>
                </div>
              </>
            )}

            <p className="text-white">
              {isSignInForm ? (
                <>
                  New to CineAI?
                  <strong onClick={toggleSignInForm} className="hover:underline cursor-pointer">
                    Sign up now.
                  </strong>
                </>
              ) : (
                <>
                  Already Registered?
                  <strong onClick={toggleSignInForm} className="hover:underline cursor-pointer">
                    Sign In.
                  </strong>
                </>
              )}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
