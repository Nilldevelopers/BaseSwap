import React from "react";
import Layout from "@/layouts/BaseLayout";
import HomeView from "@/views/home/HomeView";
import useWallet from "@/hooks/contracts/useWallet";
import WelcomeModal from "@/views/home/components/modals/WelcomeModal";
import useWETH from "@/hooks/contracts/useWETH";


export default function Home(): React.JSX.Element {
    const walletData = useWallet()
    const { data: depositData, isLoading: depositLoading, isSuccess: depositSuccess, write: depositWrite } = useWETH('deposit');
    const { data: deposit0Data, isLoading: deposit0Loading, isSuccess: deposit0Success, write: deposit0Write } = useWETH('deposit0');

    return (
        <Layout title="swap">
            <WelcomeModal/>
            <HomeView
                blockNumber={walletData.blockNumber}
                networkInfo={walletData.networkInfo}
                walletInfo={walletData.walletInfo}
            />
        </Layout>
    )
}
