import { authOptions } from "@/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/api/auth/signin?callbackUrl=/protected/alps");
  }

  return (
    <main>
      <h2>The Alps</h2>
      <p>Server protected page.</p>
    </main>
  );
}
