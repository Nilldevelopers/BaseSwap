import SwapCart from "@/views/home/components/cart/SwapCart";
import {IToken} from "@/interfaces/IToken";
import chartData from "@/data/chart/ChartData";
import dynamic from "next/dynamic";

const ChartComponent = dynamic(() => import("@/views/home/components/chart/ChartComponent"), {
    ssr: false,
    loading: () => <progress className="progress w-56"></progress>,
});

const HomeView = (props: {
    contractAddress: string,
    tokenData: IToken
}) => {
    return (
        <section className="w-full flex flex-wrap md:p-10 mb-28 md:pb-0">
            <SwapCart tokenData={props.tokenData} contractAddress={props.contractAddress}/>
            <ChartComponent data={chartData}/>
        </section>
    );
};


export default HomeView;
