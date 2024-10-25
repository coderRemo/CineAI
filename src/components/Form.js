import React, { useRef, useState } from "react";
import { LOGIN_BACKGROUND_IMAGE } from "../utils/constant";
import { checkValidData } from "../utils/validate";

const Form = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [rememberCheck, setRememberCheck] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const changeRememberBox = () => {
    setRememberCheck(!rememberCheck);
  };

  const handleButtonClick = () => {
    // console.log(email.current.value);
    // console.log(password.current.value);

    // Form Data Validation
    const msg = checkValidData(email.current.value, password.current.value);
    // console.log(msg);
    setErrMessage(msg);
  };

  return (
    <div>
      <div className="absolute inset-0">
        <img
          className="object-cover w-full h-full"
          src={LOGIN_BACKGROUND_IMAGE}
          alt="login-background-image"
        />
      </div>
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-45">
        <div className="w-full max-w-md md:w-[30rem] h-[35rem] flex flex-col items-center justify-center p-6">
          {/* ----------- FORM HANDLING ----------- */}
          <form
            onSubmit={onSubmitHandler}
            className="flex flex-col w-full bg-black bg-opacity-75 px-12 py-20 rounded-lg"
          >
            <h1 className="text-white font-bold text-[35px] mb-12">
              {isSignInForm ? "Sign In" : "Sign Up"}
            </h1>

            {!isSignInForm && (
              <input
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
                isSignInForm
                  ? "border-red-700 bg-red-700"
                  : "border-green-700 bg-green-700"
              }`}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>

            {isSignInForm && (
              <>
                <p className="text-white text-center mb-2">Forgot Password?</p>
                <div className="flex items-center space-x-2 py-2">
                  <input
                    type="checkbox"
                    id="remember"
                    checked={rememberCheck}
                    onChange={changeRememberBox}
                  />
                  <label className="text-white" htmlFor="remember">
                    Remember Me
                  </label>
                </div>
              </>
            )}

            <p className="text-white">
              {isSignInForm ? (
                <>
                  New to Netflix?
                  <strong
                    onClick={toggleSignInForm}
                    className="hover:underline cursor-pointer"
                  >
                    Sign up now.
                  </strong>
                </>
              ) : (
                <>
                  Already Registered?
                  <strong
                    onClick={toggleSignInForm}
                    className="hover:underline cursor-pointer"
                  >
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
