import Layout from "@/layouts/BaseLayout";
import dynamic from "next/dynamic";
import {ILiquidityTable} from "@/interfaces/ILiquidityTable";
import LiquidityTableData from "@/data/table/LiquidityTableData";

const LiquidityView = dynamic(() => import("@/views/liquidity/LiquidityView"), {ssr: false})

const Liquidity = ({liquidityTableData}: { liquidityTableData: ILiquidityTable }) => {
    return (
        <Layout title='Liquidity'>
            <LiquidityView tableData={liquidityTableData}/>
        </Layout>
    );
};

export async function getStaticProps() {
    // Fetch your chart data using a dedicated API function or any other method
    const liquidityTableData: ILiquidityTable = LiquidityTableData;

    return {
        props: {
            liquidityTableData,
            // Add other necessary props
        },
    };
};

export default Liquidity;