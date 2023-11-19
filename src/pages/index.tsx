import React from "react";
import Layout from "@/components/layout/Layout";
import HomeView from "@/views/home/HomeView";
import useWallet from "@/hooks/contracts/useWallet";
import useBlockData from "@/hooks/contracts/useBlockData";


export default function Home(): React.JSX.Element {
    const {account} = useWallet()
    const {blockNumber,} = useBlockData()
    return (
        <Layout title="swap">
            <HomeView account={account} blockNumber={blockNumber}/>
        </Layout>
    )
}
