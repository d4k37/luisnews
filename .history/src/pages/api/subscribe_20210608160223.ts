import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../services/stripe";


export default async (rec: NextApiRequest, res: NextApiResponse)=>{
    if(rec.method === 'POST'){
        
        const checkourSession = await stripe.checkout.sessions.create({
            
        })

    } else{
        res.setHeader('Allow', 'POST')
        res.status(405).end('Método não permitido')
    }
}