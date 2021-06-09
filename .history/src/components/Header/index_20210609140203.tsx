import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

export function Header(){
    
    const { asPath} = useRouter()

    console.log(asPath)

    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="luis.news" />
                <nav>
                    <Link href="/" prefetch>
                    <a  className={styles.active}>Home</a>
                    </Link>
                    <Link href="/posts" prefetch>
                    <a >Posts</a>
                    </Link>
                </nav>

                <SignInButton/>
            </div>
        </header>
    )
}