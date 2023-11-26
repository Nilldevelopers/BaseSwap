import Layout from "@/layouts/BaseLayout";
import HomeView from "@/views/home/HomeView";
import useWallet from "@/hooks/contracts/useWallet";
import dynamic from "next/dynamic";
import {IChartData} from "@/interfaces/IChartData";
import ChartData from "@/data/chart/ChartData";
import {NextPage} from "next";
import {fetchGitHubImages, IGithubFetchResponseType} from "@/utils/fetchGitHubImages";
import {fetchGitHubTokens} from "@/utils/fetchGitHubTokens";
import {IToken} from "@/interfaces/IToken";
import {usePublicClient, useWalletClient} from "wagmi";
import {erc20} from "@/hooks/contracts/contractFunctions";
import {useEffect} from "react";

const WelcomeModal = dynamic(() => import('@/views/home/components/modals/WelcomeModal'));

interface HomeProps {
    chartData: IChartData[],
    contractAddress: string,
    images: IGithubFetchResponseType[]
    tokenData: IToken
}

const Home: NextPage<HomeProps> = ({images, contractAddress, chartData, tokenData}) => {
    const walletData = useWallet();

    console.log(images)
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const data = await fetch(tokens[0].download_url)
    //             console.log(data)
    //
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //
    //         }
    //     };
    //     fetchData();
    // }, [tokens]);
    // console.log(tokenData)

    const publicClient = usePublicClient();
    const walletClient = useWalletClient();

    const token1 = erc20(publicClient, walletClient, '0x8980BFa8feF4D248F45ae633d74C4C1c17CE730e');
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await token1.read.balanceOf([walletClient.data.account.address]);
                alert(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [walletClient]);


    return (
        <Layout title="Swap">
            {/*{*/}
            {/*    images.map((data: IGithubFetchResponseType, index: number) => {*/}
            {/*        return <ImageImporter key={index} src={data.download_url as string} alt={data.name} w={121}*/}
            {/*                              h={121}/>*/}
            {/*    })*/}
            {/*}*/}
            <WelcomeModal/>
            <HomeView
                tokenData={tokenData}
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
        const {tokens} = await fetchGitHubTokens();

        // Fetch data from the external URL
        const response = await fetch(tokens[0].download_url);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        // Parse the JSON data
        const tokenData = await response.json() as IToken;

        return {
            props: {
                images,
                tokenData,
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