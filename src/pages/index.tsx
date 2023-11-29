import Layout from "@/layouts/BaseLayout";
import HomeView from "@/views/home/HomeView";
import dynamic from "next/dynamic";
import chartData from "@/data/chart/ChartData";
import {NextPage} from "next";
import {IToken} from "@/interfaces/IToken";
import {Octokit} from "@octokit/rest";

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

// export async function getStaticProps() {
export async function getServerSideProps() {

    const octokit = new Octokit();
    const owner = process.env.REPO_OWNER!;
    const repo = process.env.REPO_NAME!;
    const contractAddress = process.env.BTC_CONTRACT_ADDRESS!;

    try {
        const response = await octokit.repos.getContent({
            owner,
            repo,
            path: '/token', // path to the directory, empty for the root
        });

        if (Array.isArray(response.data)) {
            const tokens = response.data
                .filter((item) => item.type === 'file' && item.name.match(/\.(json)$/i))
                .map((item): any => ({
                    name: item.name,
                    download_url: item.download_url,
                }));

            const tokenData = await tokens[0].download_url.json() as IToken;
            return {
                props: {
                    tokenData,
                    contractAddress: contractAddress,
                },
            };
        } else {
            throw new Error('Unexpected response from GitHub API');
        }
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching data from GitHub API');
    }
}

export default Home