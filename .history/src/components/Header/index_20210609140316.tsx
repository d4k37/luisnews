import { SignInButton } from '../SignInButton'
import styles from './styles.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

export function Header(){
    
    const { asPath} = useRouter()

    
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="luis.news" />
                <nav>
                    <Link href="/" prefetch>
                    <a  className={asPath === '/' ? styles.active: ''}>Home</a>
                    </Link>
                    <Link href="/posts" prefetch>
                    <a className={asPath === '/' ? styles.active: ''}>Posts</a>
                    </Link>
                </nav>

                <SignInButton/>
            </div>
        </header>
    )
}