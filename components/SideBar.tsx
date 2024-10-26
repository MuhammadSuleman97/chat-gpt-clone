/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import NewChat from "./NewChat";
import { useSession, signOut } from "next-auth/react";

function SideBar() {
  const { data: session } = useSession();
  return (
    <div className="p-2 flex flex-col h-screen">
      <div className="flex-1">
        <div>
          {/* New Chat */}
          <NewChat />

          <div>{/* Model Selection */}</div>

          {/* chatList */}
        </div>
      </div>

      {/* If session exist then add logout */}
      {session && session.user?.image && (
        <div>
          <img
            src={session.user?.image}
            alt=""
            className="w-12 h-12 mx-auto mb-2 rounded-full hover:opacity-50 cursor-pointer"
            onClick={() => signOut()}
          />
        </div>
      )}
    </div>
  );
}

export default SideBar;
