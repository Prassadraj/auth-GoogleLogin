"use client";

import React from "react";
import { authClient } from "@/lib/auth-client";
function page() {
  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/dashboard",
    });
  };
  return (
    <main className="flex min-h-screen items-center justify-center">
      <button
        onClick={handleGoogleLogin}
        className="px-6 py-3 bg-blue-600 text-white rounded hover:opacity-80"
      >
        Sign in with Google
      </button>
    </main>
  );
}

export default page;
