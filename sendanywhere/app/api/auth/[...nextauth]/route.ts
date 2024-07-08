import NextAuth from "next-auth/next"
import GoogleProvider from "next-auth/providers/google"

export const authOptions={
    providers:[
        GoogleProvider({
            //@ts-ignore
            clientId:process.env.GOOGLE_ID ,
            //@ts-ignore
            clientSecret: process.env.GOOGLE_SECRET
        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
}

const handler= NextAuth(authOptions)
export {handler as GET ,handler as POST}