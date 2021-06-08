
import styles from './styles.module.scss'
import {FaBacon} from 'react-icons/fa'
import {FiYoutube} from 'react-icons/fi'
import {signIn} from 'next-auth/client'


export function SignInButton(){

    const isUserLoggedIN = true; 

    return isUserLoggedIN ? (
        <button 
        type="button"
        className={styles.signInButton}
        >
            <FaBacon color="#04d361"/>
             Luis Darkhill
             <FiYoutube color="#737380" className={styles.closeIcon}/>
        </button>

    ) : (
        <button 
        type="button"
        className={styles.signInButton}
        >
            <FaBacon color="#eba417"/>
             Sign in with Bacon
        </button>
    );
}