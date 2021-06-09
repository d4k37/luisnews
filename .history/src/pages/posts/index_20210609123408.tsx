import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts(){
    return(

 <>
        
        <Head>

            <title>Posts | Luisnews</title>

        </Head>

        <main className={styles.container}>
            <div className={styles.posts}>
                <a>
                    <time>Hoje</time>
                    <strong>Título</strong>
                    <p>Um parágrafo do post</p>
                </a>
                <a>
                    <time>Hoje</time>
                    <strong>Título</strong>
                    <p>Um parágrafo do post</p>
                </a>
                <a>
                    <time>Hoje</time>
                    <strong>Título</strong>
                    <p>Um parágrafo do post</p>
                </a>
            </div>
        </main>

 </>

    );
}