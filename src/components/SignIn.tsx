import { useState } from "react";
import { useHistory } from "react-router-dom";

import { auth, signInWithGoogle } from "../config/firebase";
import CustomButton from "./CustomButton";

const Signin = ({ handleChange, user, setUser }) => {
  const history = useHistory();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = user;

    try {
      await auth.signInWithEmailAndPassword(email, password);

      history.push("/");
      setError(null);
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {error && <div>Sorry, something went wrong. Please try again.</div>}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email address
          </label>
          <div className="mt-1">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              onChange={handleChange}
              required
              className="input input--text"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <div className="mt-1">
            <input
              id="password"
              name="password"
              type="password"
              onChange={handleChange}
              required
              className="input input--text"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember_me"
              name="remember_me"
              type="checkbox"
              className="input input--checkbox"
            />
            <label
              htmlFor="remember_me"
              className="ml-2 block text-sm text-gray-900"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <div className="mt-1 grid grid-cols-2 gap-3">
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle}>
              Sign in with Google
            </CustomButton>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
