"use client";

import { useSession } from "next-auth/react";

export default function Page() {
  const { status } = useSession({ required: true });

  if (status == "loading") {
    return "Loading...";
  }

  return (
    <main>
      <h2>The Island</h2>
      <p>Client protected page.</p>
    </main>
  );
}
