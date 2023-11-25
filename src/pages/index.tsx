import Layout from "@/layouts/BaseLayout";
import HomeView from "@/views/home/HomeView";
import useWallet from "@/hooks/contracts/useWallet";
import dynamic from "next/dynamic";
import {IChartData} from "@/interfaces/IChartData";
import ChartData from "@/data/chart/ChartData";
import Image from "next/image";
import {getImagesFromRepo} from "@/lib/github"; // Import the correct function

const WelcomeModal = dynamic(() => import('@/views/home/components/modals/WelcomeModal'));

export default function Home({chartData, contractAddress, images}: {
    chartData: IChartData[],
    contractAddress: string,
    images: any[]
}) {
    const walletData = useWallet();

    return (
        <Layout title="Swap">
            <ul>
                {images.map((image: any) => (
                    <li key={image.name}>
                        <Image src={image.download_url} alt={image.name} height={20} width={20}/>
                    </li>
                ))}
            </ul>
            <WelcomeModal/>
            <HomeView
                contractAddress={contractAddress}
                chartData={chartData}
                blockNumber={walletData.blockNumber}
                networkInfo={walletData.networkInfo}
                walletInfo={walletData.walletInfo}
            />
        </Layout>
    );
}

export async function getServerSideProps() {
    try {
        const owner = 've33-dex';
        const repo = 'SwapArchiveData';

        const imagesData = await getImagesFromRepo(owner, repo);

        return {
            props: {
                chartData: ChartData,
                contractAddress: process.env.BTC_CONTRACT_ADDRESS,
                images: imagesData,
            },
        };
    } catch (error) {
        // @ts-ignore
        console.error('Error fetching images:', error.message);
        return {
            props: {
                chartData: ChartData,
                contractAddress: process.env.BTC_CONTRACT_ADDRESS,
                images: [],
            },
        };
    }
}
