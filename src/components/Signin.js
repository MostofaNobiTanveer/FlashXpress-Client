import React from "react";
import { useLocation, useHistory, Link } from "react-router-dom";

import { useAppContext } from "../contexts/AppProvider";
import ScrollToTop from "../utils/ScrollToTop";

const Signin = () => {
  const { signInUsingGoogle } = useAppContext();
  const location = useLocation();
  const history = useHistory();

  const redirect_url = location.state?.from || "/";

  const handleGoogleSignIn = () => {
    signInUsingGoogle().then((result) => {
      history.push(redirect_url);
    });
  };

  return (
    <div className="flex-1 flex flex-col justify-center items-center py-20">
      <ScrollToTop />
      <div className="flex-shrink-0 flex justify-center">
        <Link to="/" className="inline-flex">
          <span className="sr-only">FlashXpress</span>
          <img
            className="h-20 w-auto animate-bounce"
            src="https://i.ibb.co/h9TTxVL/output-onlinepngtools.png"
            alt="Flashxpress"
          />
        </Link>
      </div>

      <div className="mt-8 sm:mx-auto px-6 w-full sm:max-w-lg">
        <div className="bg-smalt-800 py-8 px-6 shadow rounded-lg sm:px-10 space-y-6">
          <h1 className="mt-2 text-2xl font-bold text-white text-center tracking-tight">
            Please Sign In to Proceed!
          </h1>
          <button
            onClick={handleGoogleSignIn}
            className="w-full inline-flex justify-center items-center py-2 px-4 border border-smalt-500 rounded-md shadow-sm bg-indigo-600 text-sm font-medium text-gray-100 hover:bg-indigo-700"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 30 30"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M 15.003906 3 C 8.375 3 3 8.371094 3 15 C 3 21.628906 8.375 27 15.003906 27 C 25.015625 27 27.269531 17.707031 26.332031 13 L 15 13 L 15 17 L 22.738281 17 C 21.847656 20.449219 18.726562 23 15 23 C 10.582031 23 7 19.417969 7 15 C 7 10.582031 10.582031 7 15 7 C 17.007812 7 18.839844 7.746094 20.246094 8.96875 L 23.085938 6.128906 C 20.953125 4.183594 18.117188 3 15.003906 3 Z M 15.003906 3"
                clipRule="evenodd"
              />
            </svg>
            &nbsp;Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
