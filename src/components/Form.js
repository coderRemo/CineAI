import React, { useState } from "react";
import { LOGIN_BACKGROUND_IMAGE } from "../utils/constant";

const Form = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [rememberCheck, setRememberCheck] = useState(true);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const changeRememberBox = () => {
    setRememberCheck(!rememberCheck);
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
        <div className="w-full max-w-md md:w-96 h-[35rem] flex flex-col items-center justify-center p-6">
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
                className="border border-gray-400 rounded-lg px-4 py-2 mb-3 bg-gray-400 bg-opacity-15"
                type="text"
                placeholder="Full Name"
                required
              />
            )}

            <input
              className="border border-gray-400 rounded-lg px-4 py-2 mb-3 bg-gray-400 bg-opacity-15"
              type="email"
              placeholder="Email Address"
              required
            />
            <input
              className="border border-gray-400 rounded-lg px-4 py-2 mb-3 bg-gray-400 bg-opacity-15"
              type="password"
              placeholder="Password"
              required
            />
            <button
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
