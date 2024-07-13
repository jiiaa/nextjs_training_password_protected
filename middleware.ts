import { withAuth } from "next-auth/middleware";

export default withAuth({
  secret: "thisisaverylongsecret",
});

export const config = { matcher: ["/middleware-protected/:path*"] };
