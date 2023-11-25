import Layout from "@/layouts/BaseLayout";
import dynamic from "next/dynamic";
import {ILiquidityTable} from "@/interfaces/ILiquidityTable";
import LiquidityTableData from "@/data/table/LiquidityTableData";
import {fetchGitHubTokens} from "@/utils/fetchGitHubTokens";
import {ITokenList} from "@/interfaces/ITokenList";

const LiquidityView = dynamic(() => import("@/views/liquidity/LiquidityView"), {ssr: false})

const Liquidity = ({liquidityTableData, tokenData}: { liquidityTableData: ILiquidityTable, tokenData: ITokenList }) => {
    return (
        <Layout title='Liquidity'>
            <LiquidityView tokenData={tokenData} tableData={liquidityTableData}/>
        </Layout>
    );
};

export async function getServerSideProps() {
    const liquidityTableData: ILiquidityTable = LiquidityTableData;
    try {
        const {tokens} = await fetchGitHubTokens();

        // Fetch data from the external URL
        const response = await fetch(tokens[0].download_url);

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        // Parse the JSON data
        const tokenData = await response.json() as ITokenList;

        return {
            props: {
                liquidityTableData,
                tokenData,
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