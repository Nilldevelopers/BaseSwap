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
    console.log(props)


    return (
        <>
            <section className="w-full flex flex-wrap md:p-10 mb-28 md:pb-0">
                <SwapCart/>
                <TVChartContainer/>
            </section>
        </>
    );
};

export default HomeView;
