
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from './home.module.scss'
import {GetStaticProps} from 'next'
import { stripe } from '../services/stripe'

interface HomeProps{
  product:{
    priceId: string;
    amount: number;
  }
}


export default function Home({product}: HomeProps) {
  return (
<>
    <Head>
    <title>Casa |  luis.news</title>
    </Head>

    <main className={styles.contentContainer}>
      <section className={styles.hero}>
            <span>🤡🤡🤡Ei, olárr!!!🤡🤡🤡</span>

            <h1>Novidades sobre o mundo <span>PALHAÇO.</span></h1>

            <p>
              Tenha acesso a todas as publicações<br/>
            <span>Por ₿{product.amount} Bitcoins por mês!!!</span>
            </p>
            <SubscribeButton priceId={product.priceId}/>
      </section>
      <img src="/images/avatar.svg" alt="GuyCoding" />
    </main>
</>
  )
}

export const getStaticProps: GetStaticProps = async()=>{

  const price = await stripe.prices.retrieve('price_1Izp6IBOeqvUzIzuy3JWLNYX')

  const product = {
    priceId: price.id,
    amount: (price.unit_amount / 100),  
  }

  return{
    props:{
      product
    }
  }

}