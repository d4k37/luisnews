import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../services/stripe";


export default async (rec: NextApiRequest, res: NextApiResponse)=>{
    if(rec.method === 'POST'){
        
        const checkourSession = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            billing_address_collection: 'required',
            line_items: [
                {price: 'price_1Izp6IBOeqvUzIzuy3JWLNYX'}
            ]
        })

    } else{
        res.setHeader('Allow', 'POST')
        res.status(405).end('Método não permitido')
    }
}