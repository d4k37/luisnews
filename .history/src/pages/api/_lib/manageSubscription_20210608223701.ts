import {query as q } from 'faunadb'
import { fauna } from '../../../services/fauna'

export async function saveSubscription(
    subscriptionId: string,
    customerId: string,
){
    //buscar o usuario no banco do faunadb com o id customerid
    //salvar os dados da subscription do usuario no faunadb

    const userRef = await fauna.query(
        q.Get(
            q.Match(
                q.Index('user_by_stripe_customer_id')
            )
        )
    )
}