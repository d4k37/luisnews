import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import {query as q} from 'faunadb'
import {fauna} from '../../../services/fauna'
import { session } from 'next-auth/client'

export default NextAuth({
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      scope: 'read:user'
    }),
  ],

 

  callbacks:{

    async session(session){
      
      const userActiveSubscription = await fauna.query(
        q.Get(
          q.Match(
            q.Index('subscription_by_user_ref')
          )
        )
      )
      
      return session
    },
    
    async signIn(user, account, profile) {

        const {email} = user

        try {
            await fauna.query(
                q.If(
                  q.Not(
                    q.Exists(
                        q.Match(
                            q.Index('user_by_email'),
                            q.Casefold(user.email)
                        )
                    )
                  ),
                  q.Create(
                    q.Collection('users'),
                    {data:{email}}
                ),
                q.Get(
                    q.Match(
                        q.Index('user_by_email'),
                        q.Casefold(user.email)
                    )
                )
                )
            )
            return true
        } catch{
            return false
        }

       
      },
  },

})