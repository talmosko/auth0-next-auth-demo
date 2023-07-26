import NextAuth from "next-auth/next";
import Auth0Provider from "next-auth/providers/auth0";

const handler = NextAuth({
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID!,
      clientSecret: process.env.AUTH0_CLIENT_SECRET!,
      issuer: process.env.AUTH0_ISSUER,
    }),
  ],
  callbacks: {
    async session({ session, user, token }: any) {
      console.log("-----------------session------------------");
      console.log("session", session);
      console.log("user", user);
      console.log("token", token);
      session.user.roles = token.roles;
      return session;
    },

    async jwt({ token, user, account, profile, session }: any) {
      console.log("-----------------jwt------------------");
      const roles =
        token.roles ||
        (profile && profile["http://localhost:3000/roles"]) ||
        [];
      const name = token.name || profile.name;
      console.log("jwt", token);
      console.log("account", account);
      console.log("profile", profile);
      console.log("session", session);
      console.log("user", user);
      token.roles = roles;
      return token;
    },
  },
});

export { handler as GET, handler as POST };
