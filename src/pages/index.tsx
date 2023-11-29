import Layout from "@/layouts/BaseLayout";
import HomeView from "@/views/home/HomeView";
import dynamic from "next/dynamic";
import chartData from "@/data/chart/ChartData";
import {NextPage} from "next";
import {fetchGitHubTokens} from "@/utils/fetchGitHubTokens";
import {IToken} from "@/interfaces/IToken";

const WelcomeModal = dynamic(() => import('@/views/home/components/modals/WelcomeModal'));

interface HomeProps {
    contractAddress: string,
    tokenData: IToken
}

const Home: NextPage<HomeProps> = ({contractAddress, tokenData}) => {
    return (
        <Layout title="Swap">
            <WelcomeModal/>
            <HomeView
                tokenData={tokenData}
                contractAddress={contractAddress}
                chartData={chartData}
            />
        </Layout>
    );
}

export async function getServerSideProps() {
    const {tokens} = await fetchGitHubTokens();
    const response = await fetch(tokens[0].download_url);

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    // Parse the JSON data
    const tokenData = await response.json() as IToken;

    return {
        props: {
            tokenData,
            contractAddress: process.env.BTC_CONTRACT_ADDRESS,
        },
    };

}

export default Home