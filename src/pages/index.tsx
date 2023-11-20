import React from "react";
import Layout from "@/layouts/BaseLayout";
import HomeView from "@/views/home/HomeView";
import useWallet from "@/hooks/contracts/useWallet";
import dynamic from "next/dynamic";
const WelcomeModal = dynamic(() => import('@/views/home/components/modals/WelcomeModal'));

export default function Home(): React.JSX.Element {
    const walletData = useWallet()

    return (
        <Layout title="Swap">
            <WelcomeModal/>
            <HomeView
                blockNumber={walletData.blockNumber}
                networkInfo={walletData.networkInfo}
                walletInfo={walletData.walletInfo}
            />
        </Layout>
    )
}
