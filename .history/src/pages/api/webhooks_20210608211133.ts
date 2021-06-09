import { NextApiRequest, NextApiResponse } from "next";


export default (req: NextApiRequest, rep: NextApiResponse)=>{
    console.log('evento recebido')

    resizeBy.status(200).json({ok: true})
}