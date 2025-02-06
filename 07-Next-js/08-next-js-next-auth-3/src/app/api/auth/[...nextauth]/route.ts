import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "login with email",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "example@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const username = credentials?.username;
        const password = credentials?.password;

        const user = {
          id: "1",
          name: "Narsi",
          username: "narsi2000@gmail.com",
        };

        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
