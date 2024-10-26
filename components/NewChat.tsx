"use client";

import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useSession } from "next-auth/react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import  {db} from "../firebase";
import { useRouter } from "next/navigation";
function NewChat() {
  const { data: session } = useSession();
  const router = useRouter();

  const createNewChat = async () => {
    if (!session) {
      return;
    }

    const doc = await addDoc(
      // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
      collection(db, "users", session?.user?.email!, "chats"),
      {
        messeges: [],
        userId: session.user?.email,
        createdAt: serverTimestamp(),
      }
    );

    router.push(`/chat/${doc.id}`);
  };
  return (
    <div
      className="border-gray-700 border  chatRow cursor-pointer"
      onClick={createNewChat}
    >
      <PlusIcon className="h-5 w-5 m-1" />
      <p> New Chat</p>
    </div>
  );
}

export default NewChat;
