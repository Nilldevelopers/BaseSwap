import Layout from "@/layouts/BaseLayout";
import dynamic from "next/dynamic";

const LiquidityView = dynamic(() => import("@/views/liquidity/LiquidityView"), {ssr: false})

const Liquidity = () => {
    return (
        <Layout title='Liquidity'>
            <LiquidityView/>
        </Layout>
    );
};

export default Liquidity;