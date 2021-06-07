import styles from './styles.module.scss'

interface SubscribeButtonProps{
    priceId: string;
}

export function SubscribeButton({priceId}:SubscribeButtonProps){
    return(
        <button
        type="button"
        className={styles.subscribeButton}
        >

            Faça sua inscrição agora

        </button>
    )
}