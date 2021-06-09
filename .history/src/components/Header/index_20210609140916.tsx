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
                    <ActiveLink href="/" prefetch>
                    <a  className={asPath === '/' ? styles.active: ''}>Home</a>
                    </ActiveLink>
                    <ActiveLink href="/posts" prefetch>
                    <a className={asPath === '/posts' ? styles.active: ''}>Posts</a>
                    </ActiveLink>
                </nav>

                <SignInButton/>
            </div>
        </header>
    )
}