"use client"

import { useFormState } from "react-dom";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { handleSignin } from "@/app//lib/actions";

const initialState = { message: "", };

function Redirect() {
  const searchRedirect = useSearchParams().get("redirect") || "/";

  return (
    <input type="hidden" name="redirect" value={searchRedirect} />
  );
}

export default function SignInPage () {
  const [state, formAction] = useFormState(handleSignin, initialState);

  return (
      <main>
        <h1 className="text-base text-left">Sign in to see the password protected content.</h1>
        <form action={formAction}>
          <label>
            Password:
            <input name="password" type="password" className="ml-2 mr-4 mb-4 md:mb-0 pl-1 text-black bg-my-orange focus:bg-white" autoFocus />
            <Suspense>
              <Redirect />
            </Suspense>
          </label>
          <button type="submit" className="border-solid border-2 border-my-orange py-px px-5 hover:scale-110 active:scale-100">Sign in</button>
          {state?.message && <p className="mt-2 text-white">{state?.message} !</p>}
        </form>
      </main>
  );
}