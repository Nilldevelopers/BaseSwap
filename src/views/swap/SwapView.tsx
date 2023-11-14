import React from 'react';
import SwapCart from "@/views/swap/components/cart/swapCart";
import {TVChartContainer} from "@/views/swap/components/chart/chartComponent";


function SwapView() {
    return (
        <section className="w-full flex flex-wrap p-10">
            <SwapCart/>
            <TVChartContainer/>
        </section>
    );
}

export default SwapView;