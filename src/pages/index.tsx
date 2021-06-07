
import Head from 'next/head'
import styles from './home.module.scss'

export default function Home() {
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
      </section>
      <img src="/images/avatar.svg" alt="GuyCoding" />
    </main>
</>
  )
}
