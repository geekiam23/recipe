import { useState } from "react";

import googleIcon from "../assets/google.png";
import foodCollage from "../assets/food-collage.jpg";
import FacebookIcon from "../components/icons/facebook";
import TwitterIcon from "../components/icons/twitter";
import GithubIcon from "../components/icons/github";
import Signin from "../components/SignIn";
import SignUp from "../components/SignUp";
import {
  signInWithFacebook,
  signInWithGithub,
  signInWithGoogle,
  signInWithTwitter,
} from "../config/firebase";

// TODO: Change settings in firebase to allow user to use github, twitter, and facebook

const SignInAndSingUp = () => {
  const [user, setUser] = useState({
    displayName: "",
    email: "",
    password: null,
    confirmPassword: null,
  });

  const [isSignInPage, setIsSignInPage] = useState(true);

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUser({ ...user, [name]: value });
  };

  return (
    <div className="min-h-screen bg-white flex">
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              {isSignInPage
                ? "Sign in to your account"
                : "Sign up for new account"}
            </h2>
          </div>

          <div className="mt-8">
            <div>
              <div>
                <p className="text-sm font-medium text-gray-700">
                  Sign in with
                </p>

                <div className="mt-1 grid grid-cols-4 gap-3">
                  <div>
                    <div
                      onClick={signInWithGoogle}
                      className="btn btn-signin-logo"
                    >
                      <span className="sr-only">Sign in with Google</span>
                      <img className="w-5 h-5" src={googleIcon} />
                    </div>
                  </div>

                  <div>
                    <div
                      onClick={signInWithFacebook}
                      className="btn btn-signin-logo"
                    >
                      <span className="sr-only">Sign in with Facebook</span>
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        aria-hidden="true"
                      >
                        <FacebookIcon size="w-5 h-5" />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <div
                      onClick={signInWithTwitter}
                      className="btn btn-signin-logo"
                    >
                      <span className="sr-only">Sign in with Twitter</span>
                      <TwitterIcon size="w-5 h-5" />
                    </div>
                  </div>

                  <div>
                    <div
                      onClick={signInWithGithub}
                      className="btn btn-signin-logo"
                    >
                      <span className="sr-only">Sign in with GitHub</span>
                      <GithubIcon size="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 relative">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <div
                    onClick={() => setIsSignInPage(!isSignInPage)}
                    className="px-2 bg-white text-gray-500"
                  >
                    {isSignInPage
                      ? "Or create a new account"
                      : "Or sign in to an existing page"}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              {isSignInPage ? (
                <Signin
                  handleChange={handleChange}
                  user={user}
                  setUser={setUser}
                />
              ) : (
                <SignUp
                  handleChange={handleChange}
                  user={user}
                  setUser={setUser}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={foodCollage}
          alt="collage of food"
        />
      </div>
    </div>
  );
};

export default SignInAndSingUp;
