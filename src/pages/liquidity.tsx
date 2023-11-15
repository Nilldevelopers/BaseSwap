import Layout from "@/components/layout/Layout";
import dynamic from "next/dynamic";

const LiquidityView = dynamic(() => import("@/views/liquidity/LiquidityView"), {ssr: false})

const Liquidity = () => {
    return (
        <Layout title='liquidity page'>
            <LiquidityView/>
        </Layout>
    );
};

export default Liquidity;