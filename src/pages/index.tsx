import Layout from "@/layouts/BaseLayout";
import HomeView from "@/views/home/HomeView";
import useWallet from "@/hooks/contracts/useWallet";
import dynamic from "next/dynamic";
import {IChartData} from "@/interfaces/IChartData";
import ChartData from "@/data/chart/ChartData";
import {NextPage} from "next";
import {fetchGitHubImages, IGithubFetchResponseType} from "@/utils/fetchGitHubImages";
// import ImageImporter from "@/plugin/ImageImporter";

const WelcomeModal = dynamic(() => import('@/views/home/components/modals/WelcomeModal'));

interface HomeProps {
    chartData: IChartData[],
    contractAddress: string,
    images: IGithubFetchResponseType[]
}

const Home: NextPage<HomeProps> = ({images, contractAddress, chartData}) => {
    const walletData = useWallet();
    console.log(images)
    return (
        <Layout title="Swap">
            {/*{*/}
            {/*    images.map((data: IGithubFetchResponseType, index: number) => {*/}
            {/*        return <ImageImporter key={index} src={data.download_url as string} alt={data.name} w={121} h={121}/>*/}
            {/*    })*/}
            {/*}*/}
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
        const {images} = await fetchGitHubImages();
        return {
            props: {
                images,
                chartData: ChartData,
                contractAddress: process.env.BTC_CONTRACT_ADDRESS,
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                images: [],
                chartData: ChartData,
                contractAddress: process.env.BTC_CONTRACT_ADDRESS,
            },
        };
    }
}

export default Home