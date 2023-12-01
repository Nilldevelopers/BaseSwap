import SwapCart from "@/views/home/components/cart/SwapCart";
import {IToken} from "@/interfaces/IToken";
import dynamic from "next/dynamic";
import chartData from "@/data/chart/ChartData";

const ChartComponent = dynamic(
    () => import("@/views/home/components/chart/ChartComponent"),
    {
        ssr: false,
        loading: () => <div className="flex items-center justify-center w-full h-full"><progress className="progress w-56"></progress></div>,
    }
);

const HomeView = (props: {
    contractAddress: string;
    tokenData: IToken;
}) => {
    return (
        <section className="w-full flex flex-wrap md:p-10 mb-28 md:pb-0">
            <section className="md:w-4/12 p-2 flex flex-wrap">
                <SwapCart tokenData={props.tokenData} contractAddress={props.contractAddress} />
            </section>

            <section className="md:w-8/12 w-full z-[1] md:h-[500px] mt-3 rounded-xl bg-custom-cart">
                <ChartComponent data={chartData} />
            </section>
        </section>
    );
};

export default HomeView;
