import Layout from "@/layouts/BaseLayout";
import HomeView from "@/views/home/HomeView";
import dynamic from "next/dynamic";
import {NextPage} from "next";
import {IToken} from "@/interfaces/IToken";
import Cookies from 'js-cookie';
import {fetchGitHubTokens} from "@/utils/fetchGitHubTokens";

const WelcomeModal = dynamic(() => import('@/views/home/components/modals/WelcomeModal'));

interface HomeProps {
    contractAddress: string;
    tokenData: IToken;
}

const Home: NextPage<HomeProps> = ({contractAddress, tokenData}) => {
    const tokenDataFromCookies = Cookies.get('Set-Cookie');
    console.log("cookie" + tokenDataFromCookies)
    return (
        <Layout title="Swap">
            <WelcomeModal/>
            <HomeView
                tokenData={tokenData}
                contractAddress={contractAddress}
            />
        </Layout>
    );
}

// export async function getServerSideProps({req , res} : any) {
//     try {
//         // Check if token is stored in cookies
//         const tokenDataFromCookies = res.getHeader("tokenData")
//
//         if (tokenDataFromCookies) {
//             // If token exists in cookies, use it
//             const tokenData = JSON.parse(tokenDataFromCookies) as IToken;
//
//             return {
//                 props: {
//                     tokenData,
//                     contractAddress: process.env.BTC_CONTRACT_ADDRESS,
//                 },
//             };
//         }
//
//         // If token doesn't exist in cookies, fetch it
//         const { tokens } = await fetchGitHubTokens();
//
//         // Fetch data from the external URL
//         const response = await fetch(tokens[0].download_url);
//
//         if (!response.ok) {
//             throw new Error('Failed to fetch data');
//         }
//
//         // Parse the JSON data
//         const tokenData = await response.json() as IToken;
//
//         // Set tokenData in cookies for future visits
//         res.setHeader('Set-Cookie', `tokenData=${JSON.stringify(tokenData)}; Path=/`);
//
//         return {
//             props: {
//                 tokenData,
//                 contractAddress: process.env.BTC_CONTRACT_ADDRESS,
//             },
//         };
//     } catch (error) {
//         console.error(error);
//         return {
//             props: {
//                 images: [],
//                 contractAddress: process.env.BTC_CONTRACT_ADDRESS,
//             },
//         };
//     }
// }

export default Home;

export async function getServerSideProps({req, res}: any) {
    const tokenDataFromCookies = res.getHeader("tokenData")
    let tokenData;
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
    else{
        try {
            const { tokens } = await fetchGitHubTokens();
            const response = await fetch(tokens[0].download_url);
            tokenData = await response.json();
            res.setHeader('Set-Cookie', `tokenData=${tokenData}; Path=/`);
        }catch (e){

        }
    }




        return {
            props: {
                tokenData,
                contractAddress: process.env.BTC_CONTRACT_ADDRESS,
            },
        };
}