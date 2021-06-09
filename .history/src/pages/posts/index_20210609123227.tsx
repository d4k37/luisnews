import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts(){
    return(

 <>
        
        <Head>

            <title>Posts | Luisnews</title>

        </Head>

        <main>
            <div>
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