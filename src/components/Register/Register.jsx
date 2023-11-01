import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main className="px-28">
      <section className="h-[calc(100vh-240px)]">
        <div className="flex justify-center py-32">
          <form
            className="border drop-shadow-2xl bg-white p-11 rounded-lg text-ema-black"
            action="">
            <h4 className="text-4xl text-ema-light-blue mb-7 text-center">
              Register
            </h4>
            <label className="ps-2 text-ema-light-blue" for="email">
              Email
            </label>
            <input
              className="w-full rounded-lg px-2 py-3 mb-5 border mt-1 text-white"
              type="email"
              name="email"
              id="email"
              required
            />
            <label className="ps-2 text-ema-light-blue" for="password">
              Password
            </label>
            <input
              className="w-full rounded-lg px-2 py-3 border mt-1 text-white"
              type="password"
              name="password"
              id="password"
              required
            />
            <div className="mt-11 text-center">
              <button className="bg-ema-orange bg-opacity-30 text-xl w-full rounded py-4 mb-2">
                Register
              </button>
              <p>
                Already have an account to Ema-john?{" "}
                <Link className="text-ema-orange" to="/login">
                  Login
                </Link>
              </p>
            </div>
            <div className="flex py-5 gap-5 items-center px-10">
              <hr className="w-full" />
              Or
              <hr className="w-full" />
            </div>
            <Link className="border rounded-lg py-3 inline-block text-center w-full">
              <img
                className="inline mr-2"
                src="./src/assets/images/google.svg"
                alt="google icon"
              />{" "}
              Continue with google
            </Link>
            {/* <a
              href="mailto:hoqe1997@gmail.com">
              <img
                className="inline mr-2"
                src="./src/assets/images/google.svg"
                alt="google icon"
              />
              Continue with google
            </a> */}
          </form>
        </div>
      </section>
    </main>
  );
};

export default Register;
