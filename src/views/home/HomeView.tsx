import SwapCart from "@/views/home/components/cart/SwapCart";
import {GetAccountResult} from "@wagmi/core";
import {INetworkInfo} from "@/interfaces/INetworkInfo";
import ChartComponent from "@/views/home/components/chart/ChartComponent";
import {IChartData} from "@/interfaces/IChartData";


const HomeView = (props: {
    contractAddress: string,
    walletInfo: GetAccountResult,
    networkInfo: INetworkInfo,
    blockNumber: number,
    chartData: IChartData[] // Adjust the type according to your chart data structure
}) => {
    return (
        <section className="w-full flex flex-wrap md:p-10 mb-28 md:pb-0">
            <SwapCart walletInfo={props.walletInfo} contractAddress={props.contractAddress}/>
            <ChartComponent data={props.chartData}/>
        </section>
    );
};


export default HomeView;
