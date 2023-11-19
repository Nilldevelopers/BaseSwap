import React from "react";
import Layout from "@/components/layout/Layout";
import HomeView from "@/views/home/HomeView";
import useWallet from "@/hooks/contracts/useWallet";


export default function Home(): React.JSX.Element {
    const walletData = useWallet()

    return (
        <Layout title="swap">
            <HomeView
                blockNumber={walletData.blockNumber}
                networkInfo={walletData.networkInfo}
                walletInfo={walletData.walletInfo}
            />
        </Layout>
    )
}
