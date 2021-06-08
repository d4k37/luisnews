import {NextApiRequest, NextApiResponse} from 'next'

export default  (request: NextApiRequest, response: NextApiResponse)=>{
    console.log(request.query)
   
    const users = [
        {id:1, name: "luis"},
        {id:2, name: "cida"},
        {id:3, name: "antonia"},
    ]

    return response.json(users)
}