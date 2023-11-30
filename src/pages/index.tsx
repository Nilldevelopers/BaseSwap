import Layout from "@/layouts/BaseLayout";
import HomeView from "@/views/home/HomeView";
import dynamic from "next/dynamic";
import { NextPage } from "next";
import { fetchGitHubTokens } from "@/utils/fetchGitHubTokens";
import { IToken } from "@/interfaces/IToken";
import Cookies from 'js-cookie';

const WelcomeModal = dynamic(() => import('@/views/home/components/modals/WelcomeModal'));

interface HomeProps {
    contractAddress: string;
    tokenData: IToken;
}

const Home: NextPage<HomeProps> = ({ contractAddress, tokenData }) => {
    return (
        <Layout title="Swap">
            <WelcomeModal />
            <HomeView
                tokenData={tokenData}
                contractAddress={contractAddress}
            />
        </Layout>
    );
}

export async function getServerSideProps() {
    try {
        // Check if token is stored in cookies
        const tokenDataFromCookies = Cookies.get('tokenData');

        if (tokenDataFromCookies) {
            // If token exists in cookies, use it
            const tokenData = JSON.parse(tokenDataFromCookies) as IToken;

            return {
                props: {
                    tokenData,
                    contractAddress: process.env.BTC_CONTRACT_ADDRESS,
                },
            };
        }

        // If token doesn't exist in cookies, fetch it
        const { tokens } = await fetchGitHubTokens();

        // Fetch data from the external URL
        const response = await fetch(tokens[0].download_url);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        // Parse the JSON data
        const tokenData = await response.json() as IToken;

        // Set tokenData in cookies for future visits
        Cookies.set('tokenData', JSON.stringify(tokenData));

        return {
            props: {
                tokenData,
                contractAddress: process.env.BTC_CONTRACT_ADDRESS,
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                images: [],
                contractAddress: process.env.BTC_CONTRACT_ADDRESS,
            },
        };
    }
}

export default Home;
