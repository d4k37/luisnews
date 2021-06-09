import { useSession, signIn } from 'next-auth/client'
import { api } from '../../services/api';
import { getStripeJs } from '../../services/stripe-js';
import styles from './styles.module.scss'
import sessionId from '../../pages/api/subscribe'
import { useRouter } from 'next/dist/client/router';

interface SubscribeButtonProps{
    priceId: string;
}

export function SubscribeButton({priceId}:SubscribeButtonProps){

    const [session] = useSession();
    const router = useRouter();

   async function handleSubscribe(){

        if(!session){
            signIn('github')
            return;
        }

        if(session.activeSubscription){
            
            router.push('/posts')

            return;

        }

        try{
            const response = await api.post('/subscribe')
            const  {sessionId}  = response.data;

            const stripe = await getStripeJs()

            await stripe.redirectToCheckout({ sessionId: sessionId })
        }catch (err){
            alert(err.message);
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