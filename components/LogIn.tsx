"use client";

import React from "react";
import { signIn } from "next-auth/react";
import Image from "next/image";

function LogIn() {
  return (
    <div>
      <div className="bg-[#11A37F] flex justify-center items-center h-screen">
        <div className="flex flex-col items-center rounded-lg">
          <Image
            src="https://links.papareact.com/2i6"
            alt="Chat Icon"
            width={300}
            height={300}
          />
          <h1 className="text-3xl font-bold text-white">Welcome to GPT Chat</h1>
          <button
            onClick={() => signIn('google')}
            className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
