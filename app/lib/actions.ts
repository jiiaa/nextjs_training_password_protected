'use server';

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { createJwt } from "./helpers";

type FormState = {
  message: string;
};

export async function handleSignin(prevState: FormState, formData: FormData): Promise<FormState> {
  const password = formData.get("password") as string;
  const pathname = formData.get("redirect") as string;

  const token = createJwt(pathname);

  // Different password for each location (page)
  // Diffferent cookie for each location (page)
  if (pathname.includes("alps")) {
    if (process.env.PASSWORD_ALPS === password) {
      cookies().set({
        name: "vowdanger_alps",
        value: token,
        path: "/",
        maxAge: 60,
        secure: true,
        httpOnly: true,
      });
      redirect(pathname);
    } else return { message: "Invalid password" };

  } else if (pathname.includes("island")) {
    if (process.env.PASSWORD_ISLAND === password) {
      cookies().set({
        name: "vowdanger_island",
        value: token,
        path: "/",
        maxAge: 60,
        secure: true,
        httpOnly: true,
      });
      redirect(pathname);
    } else return { message: "Invalid password" };

  } else if (pathname.includes("sand")) {
    if (process.env.PASSWORD_SAND === password) {
      cookies().set({
        name: "vowdanger_sand",
        value: token,
        path: "/",
        maxAge: 60,
        secure: true,
        httpOnly: true,
      });
      redirect(pathname);
    } else return { message: "Invalid password" };

  } else {
    throw new Error("Invalid pathname");
  }
}