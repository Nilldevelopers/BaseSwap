import React from 'react';
import SwapCart from "@/views/home/components/cart/SwapCart";
import {TVChartContainer} from "@/views/home/components/chart/chartComponent";
import {GetAccountResult} from "@wagmi/core";
import {INetworkInfo} from "@/interfaces/INetworkInfo";

const HomeView = (props: {
    walletInfo: GetAccountResult,
    networkInfo: INetworkInfo,
    blockNumber: number
}) => {


    return (
        <section className="w-full flex flex-wrap md:p-10 mb-28 md:pb-0">
            <section className="md:w-4/12  p-2 flex flex-wrap">
                <SwapCart/>
            </section>

            <section className="md:w-8/12 w-full md:h-[500px]  mt-3 rounded-xl bg-custom-cart">
                <TVChartContainer/>
            </section>
        </section>
    );
};

export default HomeView;

