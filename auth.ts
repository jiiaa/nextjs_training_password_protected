import { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "password",
      credentials: {
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, _request) {
        if (credentials?.password == process.env.NEXTAUTH_PASSWORD) {
          return { id: "0", name: "WovDanger", email: "wov@danger.com" };
        } else {
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: "/signin" },
};
