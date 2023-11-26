import Layout from "@/layouts/BaseLayout";
import {fetchGitHubTokens} from "@/utils/fetchGitHubTokens";
import {IToken} from "@/interfaces/IToken";
import LiquidityView from "@/views/liquidity/LiquidityView";
import liquidityTableData from "@/data/table/LiquidityTableData";
import {ILiquidityTable} from "@/interfaces/ILiquidityTable";


const Liquidity = ({liquidityTableData, tokenData}: { liquidityTableData: ILiquidityTable, tokenData: IToken }) => {
    return (
        <Layout title='Liquidity'>
            <LiquidityView tokenData={tokenData} tableData={liquidityTableData}/>
        </Layout>
    );
};

export async function getServerSideProps(context: any) {
    context.res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');

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
                tokenData,
                liquidityTableData,
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                liquidityTableData,
            },
        };
    }
}


export default Liquidity;