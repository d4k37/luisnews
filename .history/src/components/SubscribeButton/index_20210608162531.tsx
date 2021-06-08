import { useSession, signIn } from 'next-auth/client'
import { api } from '../../services/api';
import styles from './styles.module.scss'

interface SubscribeButtonProps{
    priceId: string;
}

export function SubscribeButton({priceId}:SubscribeButtonProps){

    const [session] = useSession();

   async function handleSubscribe(){

        if(!session){
            signIn('github')
            return;
        }

        try{
            cosnet Response = await api.post('/subscribe')
        }

    }

    return(
        <button
        type="button"
        className={styles.subscribeButton}
        onClick={handleSubscribe}
        >

            Faça sua inscrição agora

        </button>
    )
}