import SwapCart from "@/views/home/components/cart/SwapCart";
import {GetAccountResult} from "@wagmi/core";
import {INetworkInfo} from "@/interfaces/INetworkInfo";
import ChartComponent from "@/views/home/components/chart/ChartComponent";
import {IChartData} from "@/interfaces/IChartData";
import {IToken} from "@/interfaces/IToken";
import {tokenize} from "@csstools/css-tokenizer";


const HomeView = (props: {
    contractAddress: string,
    chartData: IChartData[] // Adjust the type according to your chart data structure
    tokenData: IToken
}) => {
    return (
        <section className="w-full flex flex-wrap md:p-10 mb-28 md:pb-0">
            <SwapCart tokenData={props.tokenData} contractAddress={props.contractAddress}/>
            <ChartComponent data={props.chartData}/>
        </section>
    );
};


export default HomeView;
