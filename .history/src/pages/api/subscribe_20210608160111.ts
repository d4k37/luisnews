import { NextApiRequest, NextApiResponse } from "next";


export default async (rec: NextApiRequest, res: NextApiResponse)=>{
    if(rec.method === 'POST'){
        
    } else{
        res.setHeader('Allow', 'POST')
        res.status(405).end('Método não permitido')
    }
}