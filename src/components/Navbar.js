import React, { useState } from "react";
import { Link, NavLink, useHistory, useLocation } from "react-router-dom";
import { useAppContext } from "../contexts/AppProvider";

const Navbar = () => {
  const { user, signInUsingGoogle, userSignOut } = useAppContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const redirect_url = location.state?.from;

  const handleUserSignIn = () => {
    signInUsingGoogle().then((result) => {
      setIsMenuOpen(false);
      history.push(redirect_url);
    });
  };

  return (
    <nav className="bg-smalt-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* <div className="flex items-center"> */}
          <Link to="/" className="flex-shrink-0 flex gap-1 items-center">
            <img
              className="h-8 w-8"
              src="https://i.ibb.co/h9TTxVL/output-onlinepngtools.png"
              alt="Flasxpress"
            />
            <h1 className="text-smalt-100 font-medium text-lg -mt-0.5">
              FlashXpress
            </h1>
          </Link>
          {/* </div> */}
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-1 lg:space-x-4">
              <NavLink
                to="/"
                className="text-gray-300 hover:bg-smalt-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="text-gray-300 hover:bg-smalt-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                About
              </NavLink>

              <NavLink
                to="/create-parcel"
                className="text-gray-300 hover:bg-smalt-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Create Parcel
              </NavLink>

              <NavLink
                to="/coverage"
                className="text-gray-300 hover:bg-smalt-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Coverage
              </NavLink>

              <NavLink
                to="/terms"
                className="text-gray-300 hover:bg-smalt-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Terms
              </NavLink>

              {user?.email && (
                <NavLink
                  to="/parcels"
                  className="text-gray-300 hover:bg-smalt-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Parcels
                </NavLink>
              )}
            </div>
          </div>
          {/* profile */}
          <div className="hidden md:block">
            {user?.email ? (
              <div className="ml-4 flex items-center md:ml-6">
                <div className="ml-3 relative">
                  <div>
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      type="button"
                      className="max-w-xs bg-smalt-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-smalt-500 focus:ring-white"
                    >
                      {user?.photoURL ? (
                        <img
                          className="h-10 w-10 rounded-full overflow-hidden"
                          src={user?.photoURL}
                          alt={user.displayName}
                        />
                      ) : (
                        <svg
                          className="h-8 w-8 text-smalt-400 rounded-full overflow-hidden"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      )}
                    </button>
                  </div>
                  {isDropdownOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-auto rounded-md shadow-lg py-1 bg-smalt-700 ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="p-2 pb-4 border-b border-smalt-500">
                        <div className="text-sm font-noramal leading-none text-white">
                          {user.displayName}
                        </div>
                        <div className="text-xm font-normal leading-none mt-0.5 text-smalt-300">
                          {user.email}
                        </div>
                      </div>
                      <NavLink
                        onClick={() => setIsDropdownOpen(false)}
                        to="/parcels"
                        className="block px-4 py-2 text-sm text-smalt-100 hover:bg-smalt-500"
                      >
                        Parcels
                      </NavLink>

                      <button
                        onClick={() => {
                          setIsDropdownOpen(false);
                          userSignOut();
                        }}
                        className="text-left w-full px-4 py-2 text-sm text-smalt-100 hover:bg-smalt-500"
                      >
                        Sign out
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ) : (
              <div className="px-4 flex items-center">
                <div>
                  <button
                    onClick={handleUserSignIn}
                    className="w-full inline-flex justify-center items-center py-1.5 px-6 border border-smalt-500 rounded-md shadow-sm bg-indigo-600 text-sm font-medium text-smalt-50 hover:bg-indigo-700"
                  >
                    <span className="sr-only">Sign in with Google</span>
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
                    &nbsp;Sign in
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* menu button */}
          <div className="-mr-2 flex md:hidden">
            {/* <!-- Mobile menu button --> */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-indigo-900 inline-flex items-center justify-center p-2 rounded-md text-smalt-100 hover:text-white hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-smalt-100"
            >
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute border-b border-indigo-900 bg-smalt-800 inset-x-0 origin-top-right z-10">
          {/* nav link */}
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              onClick={() => setIsMenuOpen(false)}
              to="/"
              className="text-smalt-200 hover:bg-smalt-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setIsMenuOpen(false)}
              to="/about"
              className="text-smalt-200 hover:bg-smalt-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              About
            </NavLink>

            <NavLink
              onClick={() => setIsMenuOpen(false)}
              to="/create-parcel"
              className="text-smalt-200 hover:bg-smalt-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Create Parcel
            </NavLink>

            <NavLink
              onClick={() => setIsMenuOpen(false)}
              to="/coverage"
              className="text-smalt-200 hover:bg-smalt-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Coverage
            </NavLink>

            <NavLink
              to="/terms"
              className="text-gray-300 hover:bg-smalt-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Terms
            </NavLink>

            {user?.email && (
              <NavLink
                to="/parcels"
                className="text-gray-300 hover:bg-smalt-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Parcels
              </NavLink>
            )}
          </div>
          {/* profile */}
          {user?.email ? (
            <div className="pt-4 pb-3 border-t border-smalt-900">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0 h-10 w-10 rounded-full overflow-hidden">
                  {user.photoURL ? (
                    <img
                      className="h-full w-full object-cover object-center"
                      src={user.photoURL}
                      alt={user.displayName}
                    />
                  ) : (
                    <svg
                      className="h-full w-full object-cover object-center text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">
                    {user.displayName}
                  </div>
                  <div className="text-sm font-medium leading-none mt-0.5 text-smalt-300">
                    {user.email}
                  </div>
                </div>
              </div>
              <div className="mt-3 px-2 space-y-1">
                <NavLink
                  onClick={() => setIsMenuOpen(false)}
                  to="/parcels"
                  className="block px-3 py-2 rounded-md text-base font-medium text-smalt-200 hover:text-white hover:bg-smalt-500"
                >
                  Parcels
                </NavLink>

                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    userSignOut();
                  }}
                  className="text-left w-full px-3 py-2 rounded-md text-base font-medium text-smalt-200 hover:text-white hover:bg-smalt-500"
                >
                  Sign out
                </button>
              </div>
            </div>
          ) : (
            <div className="py-6 px-4">
              <button
                onClick={handleUserSignIn}
                className="w-full inline-flex justify-center items-center py-2 px-4 border border-smalt-600 rounded-md shadow-sm bg-indigo-600 text-sm font-medium text-gray-100 hover:bg-indigo-700"
              >
                <span className="sr-only">Sign in with Google</span>
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
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
