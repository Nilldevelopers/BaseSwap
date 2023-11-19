import React from "react";
import Layout from "@/layouts/BaseLayout";
import HomeView from "@/views/home/HomeView";
import useWallet from "@/hooks/contracts/useWallet";
import WelcomeModal from "@/views/home/components/modals/WelcomeModal";


export default function Home(): React.JSX.Element {
    const walletData = useWallet()

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
