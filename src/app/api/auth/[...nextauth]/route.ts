import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    providers: [
        GoogleProvider({
            /**! after CLIENT_ID and CLIENT_SECRET defines that this value will always be their it cannot be undefined*/
            clientId: process.env.CLIENT_ID!,
            clientSecret: process.env.CLIENT_SECRET!
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
});

export { handler as GET, handler as POST };