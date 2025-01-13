import { useState } from "react";
import { Link } from "react-router-dom";
import { doSignInWithGoogle } from "../firebase/auth";

interface myProps {
  isLogin?: Boolean;
  handleSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  errorMessage?: string;
}

export default function LoginRegistrationForm({
  isLogin,
  handleSubmit,
  errorMessage,
}: myProps) {
  const [loading, setLoading] = useState(false);
  const GoogleLogo = (
    <svg
      viewBox="-3 0 262 262"
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
    >
      <path
        d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
        fill="#4285F4"
      ></path>
      <path
        d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
        fill="#34A853"
      ></path>
      <path
        d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
        fill="#FBBC05"
      ></path>
      <path
        d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
        fill="#EB4335"
      ></path>
    </svg>
  );
  return (
    <>
      <main className="flex flex-col items-center justify-center my-10 px-8 text-zinc-200 space-y-4">
        {errorMessage && (
          <h2 className="text-xl text-center bg-gray-200 text-green-700 p-2 px-4 rounded-xl font-semibold">
            {errorMessage}
          </h2>
        )}
        <section className="flex flex-col items-center p-4 rounded-xl w-96 bg-slate-950 sm:w-[90vw]">
          <h1 className="text-3xl font-bold">
            {isLogin ? "Login" : "Registration"}
          </h1>
          <div className="py-6 w-[95%] flex flex-col items-center space-y-2">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col items-center space-y-4"
            >
              <div className="flex items-center justify-center font-semibold space-x-4">
                <label htmlFor="userEmail" className="text-xl cursor-pointer">
                  Email :
                </label>
                <input
                  id="userEmail"
                  name="userEmail"
                  type="text"
                  required
                  placeholder="Enter Email"
                  className="px-2 py-1 w-60 rounded-xl text-teal-900 sm:w-56"
                />
              </div>
              <div className="flex items-center justify-center font-semibold space-x-4 pb-2">
                <label
                  htmlFor="userPassword"
                  className="text-xl cursor-pointer"
                >
                  Pass :
                </label>
                <input
                  id="userPassword"
                  name="userPassword"
                  type="password"
                  required
                  placeholder="Enter Password"
                  className="px-2 py-1 w-60 rounded-xl text-teal-900 sm:w-56"
                />
              </div>
              <button
                type="submit"
                className="bg-white hover:bg-slate-100 text-xl hover:text-black p-1 px-8 rounded-xl text-center text-slate-950 sm:p-2 sm:px-8"
              >
                {isLogin ? "Login" : "Create Account"}
              </button>
            </form>
            <div>
              {isLogin ? (
                <div className="py-2">
                  Don&apos;t have an account?
                  <Link to="/signup" className="pl-1 font-bold underline">
                    Register
                  </Link>
                </div>
              ) : (
                <div className="py-2">
                  Already have an account?
                  <Link to="/login" className="pl-1 font-bold underline">
                    Login
                  </Link>
                </div>
              )}
            </div>
            <p className="font-bold">Or</p>
            {/* Google Login */}
            <div onClick={() => setLoading(!loading)}>
              <button
                type="submit"
                onClick={doSignInWithGoogle}
                className="flex space-x-2 font-semibold text-xl px-2 py-1 bg-zinc-200 text-black hover:bg-white rounded-xl text-center"
              >
                {loading ? (
                  <span>Loading...</span>
                ) : (
                  <>
                    <span>{GoogleLogo}</span>
                    <span>{isLogin ? "Sign in" : "Continue"} with Google</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
