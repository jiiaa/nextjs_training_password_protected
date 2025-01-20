'use server';

import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function handleSignin(formData: FormData) {
  const password = formData.get("password") as string;
  const pathname = formData.get("redirect") as string;

  console.log(formData);

  if (pathname.includes("alps")) {
    if (process.env.PASSWORD_ALPS === password) {
      cookies().set({
        name: "vowdanger_alps",
        value: "alps",
        path: "/",
        maxAge: 60,
        secure: true,
        httpOnly: true,
      });
      redirect(pathname);
    }
  }
  if (pathname.includes("island")) {
    if (process.env.PASSWORD_ISLAND === password) {
      cookies().set({
        name: "vowdanger_island",
        value: "island",
        path: "/",
        maxAge: 60,
        secure: true,
      });
      redirect(pathname);
    }
  }
  if (pathname.includes("sand")) {
    if (process.env.PASSWORD_SAND === password) {
      cookies().set({
        name: "vowdanger_sand",
        value: "sand",
        path: "/",
        maxAge: 60,
        secure: true,
      });
      redirect(pathname);
    }
  }
}