import { useCallback } from 'react'
import { ethos } from 'ethos-connect'
import { PrimaryButton } from '.';

const Disconnect = () => {
    const { wallet } = ethos.useWallet();

    const disconnect = useCallback(() => {
        if (!wallet) return;
        wallet.disconnect();
    }, [wallet])

    return (
        <div>
        <PrimaryButton
        // onclick add a redirect url
        onClick = {() => {
            window.location.href = 'http://localhost:4173/city?id=0x22e6ab271f85de5ac3b6ae75c10f8d9f7ef1eacd0787c4b4691fbcfd87085e32'
        }
        }
        >
            EXPLORE!
        </PrimaryButton>
        <PrimaryButton
            onClick={disconnect}
        >
            Sign Out
        </PrimaryButton>
        </div>
    )
}

export default Disconnect;