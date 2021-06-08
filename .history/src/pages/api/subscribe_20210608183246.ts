import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../services/stripe";
import {getSession} from 'next-auth/client'


export default async (req: NextApiRequest, res: NextApiResponse)=>{
    try {
    if(req.method === 'POST'){

            const session = await getSession({req})
   
            const stripeCustomer = await stripe.customers.create({
                email: session.user.email,
            })
            console.log("stripeCustomer")
            console.log(stripeCustomer)
            
            const stripeCheckoutSession = await stripe.checkout.sessions.create({
                success_url: 'http://localhost:3000/posts',
                cancel_url: process.env.STRIPE_CANCEL_URL,
                payment_method_types: ['card'],
                billing_address_collection: 'required',
                line_items: [
                    {
                        price: 'price_1Izp6IBOeqvUzIzuy3JWLNYX', 
                        quantity: 1,
                    }
                ],
                mode: 'subscription',
                allow_promotion_codes: true,
            })
            console.log("stripeCheckoutSession")
            console.log(stripeCheckoutSession)
            return res.status(200).json({ sessionId: stripeCheckoutSession.id})
        } else{
            res.setHeader('Allow', 'POST')
            res.status(405).end('Método não permitido')
        }
        } catch (error) {
            console.log(error);
            
        }
        


}