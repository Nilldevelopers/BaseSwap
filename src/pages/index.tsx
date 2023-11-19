import React from "react";
import Layout from "@/components/layout/Layout";
import HomeView from "@/views/home/HomeView";
import useWallet from "@/hooks/contracts/useWallet";


export default function Home(): React.JSX.Element {
    const walletData = useWallet()
    console.log(walletData)
    return (
        <Layout title="swap">
            <HomeView
                account={walletData.walletInfo}
                blockNumber={walletData.blockNumber}
                networkData={walletData.networkInfo}
            />
        </Layout>
    )
}
