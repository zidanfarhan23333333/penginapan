import * as React from "react";

export default function Register() {
  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-gray-2">
      <h1 className="text-5xl font-semibold">Create an Account</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Let's get started by creating your account
      </p>
      <div className="mt-8">
        <div>
          <label className="text-lg font-medium">Name</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="text-lg font-medium">Email</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="text-lg font-medium">Password</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your password"
            type="password"
          />
        </div>
        <div className="mt-8 flex flex-col gap-y-4">
          <button className="active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold ">
            Sign up
          </button>
        </div>
        <div className="mt-8 flex justify-center items-center">
          <p className="font-medium text-base">Already have an account?</p>
          <button className="text-violet-400 text-base font-medium">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
}
