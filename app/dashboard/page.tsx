"use client";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

function DashBoard() {
  const [user, setUser] = useState<{
    name: string;
    email: string;
    image: string;
  } | null>(null);
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchSession() {
      const session = await authClient.getSession();

      if (session.data?.user) {
        const { name, email, image } = session.data.user as any;
        setUser({ name, email, image });
      } else {
        setUser(null);
      }

      // setLoading(false);
    }

    fetchSession();
  }, []);

  const signOut = async () => {
    await authClient.signOut();
    redirect("sign-in");
  };
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-2xl">
      <Image
        src={user?.image ?? "/"}
        alt="profile"
        width={800}
        height={800}
        quality={1000}
        className="w-40 aspect-square rounded-full"
      />
      <h1>Vanakam pa thambi</h1>
      <p className="bg-linear-to-r from-red-400 to-blue-400 text-transparent bg-clip-text">
        {user?.name}
      </p>
      <p className="text-sm bg-[red] rounded-2xl p-2 mt-4" onClick={signOut}>Sign Out</p>
    </div>
  );
}

export default DashBoard;
