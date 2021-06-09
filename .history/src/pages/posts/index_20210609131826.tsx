import { GetStaticProps } from 'next';
import Head from 'next/head'
import { getPrismicClient } from '../../services/prismic';
import styles from './styles.module.scss'
import Prismic from '@prismicio/client'
import {}  from 'prismic-dom'

export default function Posts(){
    return(

 <>
        
        <Head>

            <title>Posts | Luisnews</title>

        </Head>

        <main className={styles.container}>
            <div className={styles.posts}>
                <a href="#">
                    <time>Hoje</time>
                    <strong>Título</strong>
                    <p>Um parágrafo do post</p>
                </a>
                <a href="#">
                    <time>Hoje</time>
                    <strong>Título</strong>
                    <p>Um parágrafo do post</p>
                </a>
                <a href="#">
                    <time>Hoje</time>
                    <strong>Título</strong>
                    <p>Um parágrafo do post</p>
                </a>
            </div>
        </main>

 </>

    );
}


export const getStaticProps: GetStaticProps = async ()=>{
    const prismic = getPrismicClient()

    const response = await prismic.query(
         [Prismic.predicates.at('document.type', 'publication')],
         {fetch: ['publication.title', 'publication.content'],
          pageSize: 100,  
    })

    const posts = response.results.map(post =>{
        return{
            slug: post.uid,
            title:  post
        }
    })

    return {
        props:{}
    }
}