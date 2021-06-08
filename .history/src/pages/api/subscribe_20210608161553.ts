import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../services/stripe";
import {getSession} from 'next-auth/client'


export default async (rec: NextApiRequest, res: NextApiResponse)=>{
    if(rec.method === 'POST'){
        
        const session = await getSession({req})

        session.user
        
        const checkourSession = await stripe.checkout.sessions.create({
            customer:{},
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

    } else{
        res.setHeader('Allow', 'POST')
        res.status(405).end('Método não permitido')
    }
}