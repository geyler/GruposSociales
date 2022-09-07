import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
//import GitHubProvider from 'next-auth/providers/github'
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "lib/mongodb"

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  providers : [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })/*,
    GitHubProvider({
    clientId: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET
  })*/
  ]
})