
import styles from './styles.module.scss'
import {FaBacon} from 'react-icons/fa'
import {FiYoutube} from 'react-icons/fi'
import {signIn, useSession } from 'next-auth/client'


export function SignInButton(){

    const [session] = useSession()

    console.log(session);

    return session ? (
        <button 
        type="button"
        className={styles.signInButton}
        >
            <FaBacon color="#04d361"/>
            {session.user.name}<>"  "</>
            <img src={session.user.image} alt="" width="20px" height="20px"/>
            
             <FiYoutube color="#737380" className={styles.closeIcon}/>
        </button>

    ) : (
        <button 
        type="button"
        className={styles.signInButton}
        onClick={()=> signIn('github')}

        >
            <FaBacon color="#eba417"/>
             Sign in with Bacon
        </button>
    );
}