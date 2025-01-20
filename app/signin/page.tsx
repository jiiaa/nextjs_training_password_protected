"use client"

import { useSearchParams } from "next/navigation";
import { handleSignin } from "@/app//lib/actions";


export default async function SignIn() {
  const searchRedirect = useSearchParams().get("redirect") || "/";

  return (
    <main>
      <h1 className="text-base text-left">Sign in to see the password protected content.</h1>
      <form action={handleSignin}>
        <label>
          Password: 
          <input name="password" type="password" className="ml-2 mr-4 text-black bg-my-orange focus:bg-white" />
          <input type="hidden" name="redirect" value={searchRedirect} />
        </label>
        <button type="submit" className="border-solid border-2 border-my-orange py-px px-5 hover:scale-110 active:scale-100">Sign in</button>
      </form>
    </main>
  );
}