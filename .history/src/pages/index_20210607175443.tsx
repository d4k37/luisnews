
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import styles from './home.module.scss'
import {GetServerSideProps} from 'next'
import { stripe } from '../services/stripe'

export default function Home(props) {
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
            <span>Por ₿0.00000000001 Bitcoins por mês!!!</span>
            </p>
            <SubscribeButton/>
      </section>
      <img src="/images/avatar.svg" alt="GuyCoding" />
    </main>
</>
  )
}

export const getServerSideProps: GetServerSideProps = async()=>{

  const price = await stripe.prices.retrieve('price_1Izp6IBOeqvUzIzuy3JWLNYX', {expand:['product']})

  return{
    props:{
      name:'luis'
    }
  }

}