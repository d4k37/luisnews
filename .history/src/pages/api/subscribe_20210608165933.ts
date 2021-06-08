import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../services/stripe";
import {getSession, req} from 'next-auth/client'


export default async (rec: NextApiRequest, res: NextApiResponse)=>{
    if(rec.method === 'POST'){
        
        const session = await getSession({req})

        const stripeCustomer = await stripe.customers.create({
            email: session.user.email,
        })
        
        const stripeCheckourSession = await stripe.checkout.sessions.create({
            customer:stripeCustomer.id,
            payment_method_types: ['card'],
            billing_address_collection: 'required',
            line_items: [
                {price: 'price_1Izp6IBOeqvUzIzuy3JWLNYX', quantity: 1}
            ],
            mode: 'subscription',
            allow_promotion_codes: true,
            success_url: process.env.STRIPE_SUCCESS_URL,
            cancel_url: process.env.STRIPE_CANCEL_URL
        })

        return res.status(200).json({sessionId: stripeCheckourSession.id})
    } else{
        res.setHeader('Allow', 'POST')
        res.status(405).end('Método não permitido')
    }
}