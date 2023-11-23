import Layout from "@/layouts/BaseLayout";
import HomeView from "@/views/home/HomeView";
import useWallet from "@/hooks/contracts/useWallet";
import dynamic from "next/dynamic";
import {IChartData} from "@/interfaces/IChartData";
import ChartData from "@/data/chart/ChartData";

const WelcomeModal = dynamic(() => import('@/views/home/components/modals/WelcomeModal'));

export default function Home({chartData}: { chartData: IChartData[] }) {
    const walletData = useWallet()

    return (
        <Layout title="Swap">
            <WelcomeModal/>
            <HomeView
                chartData={chartData}
                blockNumber={walletData.blockNumber}
                networkInfo={walletData.networkInfo}
                walletInfo={walletData.walletInfo}
            />
        </Layout>
    )
}

export async function getStaticProps() {
    // Fetch your chart data using a dedicated API function or any other method
    const chartData: IChartData[] = ChartData;

    return {
        props: {
            chartData,
            // Add other necessary props
        },
    };
};