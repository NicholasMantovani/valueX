import NextAuth from "next-auth"
import { SupabaseAdapter } from "@next-auth/supabase-adapter"
import GithubProvider from 'next-auth/providers/github';


// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.OAUTH_CLIENT_KEY,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
    }),
  ],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    secret: process.env.NEXT_PUBLIC_SERVICE_ROLE_KEY,
  }),
  secret: process.env.NEXT_PUBLIC_SECRET
  // other configs...
}
export default NextAuth(authOptions);