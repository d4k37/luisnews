import { GetServerSideProps } from "next"
import { getSession } from "next-auth/client"



export default function Post(){
    return(
        <h1>Teste</h1>
    )
}

export const getServerSideProps: GetServerSideProps = async ({}) =>{

    const session = await getSession({req})

}