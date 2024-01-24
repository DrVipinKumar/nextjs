import Credentials from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import executeQuery from "./MySQLConnect";
export const authOptions = {
  session: {
    strategy: "jwt",
    maxAge: 2 * 24 * 60 * 60, //2 Days
  },
  providers: [
    Credentials({
      type: "credentials",
      credentials: {
        email: {
          label: "Your Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        const query = `select * from login where email="${email}" and password="${password}"`;
        const user = await executeQuery(query, []);
        if (Object.keys(user).length > 0) {
          return {
            Id: 1,
            email: email,
            user: "Dr. Vipin Classes",
          };
        } else {
          return null;
        }
      },
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.email = user.email;
        token.username = user.user;
        token.accessToken = user.accessToken;
      }
      return token;
    },
    session: ({ session, token, user }) => {
      if (token) {
        session.user.email = token.email;
        session.user.username = token.username;
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
  },
};
