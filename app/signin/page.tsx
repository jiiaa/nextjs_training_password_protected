import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/auth';

export default async function SignIn() {
  const session = await getServerSession(authOptions);
  const cookieStore = cookies();

  if (session) {
    redirect('/');
  }

  const csrfTokenCookie = `${
    process.env.NODE_ENV == 'production' ? '__Host-' : ''
  }next-auth.csrf-token`;
  const csrfToken = cookieStore.get(csrfTokenCookie)?.value.split('|')[0];

  return (
    <main>
      <h1 className="text-base text-left">Sign in to see the password protected content.</h1>
      <form method="post" action="/api/auth/callback/credentials">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label>
          Password: 
          <input name="password" type="password" className="ml-2 mr-4 text-black bg-my-orange focus:bg-white" />
        </label>
        <button type="submit" className="border-solid border-2 border-my-orange py-px px-5 hover:scale-110 active:scale-100">Sign in</button>
      </form>
    </main>
  );
}