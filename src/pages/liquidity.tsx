import Layout from "@/layouts/BaseLayout";
import { fetchGitHubTokens } from "@/utils/fetchGitHubTokens";
import { IToken } from "@/interfaces/IToken";
import LiquidityView from "@/views/liquidity/LiquidityView";
import liquidityTableData from "@/data/table/LiquidityTableData";
import { ILiquidityTable } from "@/interfaces/ILiquidityTable";
import Cookies from 'js-cookie';

const Liquidity = ({ liquidityTableData, tokenData, factoryAddress }: { liquidityTableData: ILiquidityTable, tokenData: IToken, factoryAddress: `0x${string}` }) => {
    return (
        <Layout title='Liquidity'>
            <LiquidityView tokenData={tokenData} tableData={liquidityTableData} factoryAddress={factoryAddress} />
        </Layout>
    );
};

export async function getServerSideProps() {
    const factoryAddress = process.env.FACTORY_CONTRACT_ADDRESS as `0x${string}`;

    try {
        // Check if token is stored in cookies
        const tokenDataFromCookies = Cookies.get('tokenData');

        if (tokenDataFromCookies) {
            // If token exists in cookies, use it
            const tokenData = JSON.parse(tokenDataFromCookies) as IToken;

            return {
                props: {
                    factoryAddress,
                    tokenData,
                    liquidityTableData,
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
                factoryAddress,
                tokenData,
                liquidityTableData,
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                factoryAddress,
                liquidityTableData,
            },
        };
    }
}

export default Liquidity;
