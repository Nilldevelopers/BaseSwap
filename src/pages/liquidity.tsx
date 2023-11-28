import Layout from "@/layouts/BaseLayout";
import {fetchGitHubTokens} from "@/utils/fetchGitHubTokens";
import {IToken} from "@/interfaces/IToken";
import LiquidityView from "@/views/liquidity/LiquidityView";
import liquidityTableData from "@/data/table/LiquidityTableData";
import {ILiquidityTable} from "@/interfaces/ILiquidityTable";


const Liquidity = ({liquidityTableData, tokenData,factoryAddress}: { liquidityTableData: ILiquidityTable, tokenData: IToken,factoryAddress:`0x${string}` }) => {
    return (
        <Layout title='Liquidity'>
            <LiquidityView tokenData={tokenData} tableData={liquidityTableData} factoryAddress={factoryAddress}/>
        </Layout>
    );
};

export async function getServerSideProps() {
    const factoryAddress = process.env.FACTORY_CONTRACT_ADDRESS as `0x${string}`
    try {
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