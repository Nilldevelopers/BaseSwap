import Layout from "@/layouts/BaseLayout";
import HomeView from "@/views/home/HomeView";
import useWallet from "@/hooks/contracts/useWallet";
import dynamic from "next/dynamic";
import {IChartData} from "@/interfaces/IChartData";
import ChartData from "@/data/chart/ChartData";

const WelcomeModal = dynamic(() => import('@/views/home/components/modals/WelcomeModal'));

export default function Home({chartData, contractAddress}: { chartData: IChartData[], contractAddress: string }) {
    const walletData = useWallet()

    return (
        <Layout title="Swap">
            <WelcomeModal/>
            <HomeView
                contractAddress={contractAddress}
                chartData={chartData}
                blockNumber={walletData.blockNumber}
                networkInfo={walletData.networkInfo}
                walletInfo={walletData.walletInfo}
            />
        </Layout>
    )
}

export async function getStaticProps() {
    const chartData: IChartData[] = ChartData;
    const contractAddress = process.env.BTC_CONTRACT_ADDRESS

    return {
        props: {
            chartData,
            contractAddress
        },
    };
}