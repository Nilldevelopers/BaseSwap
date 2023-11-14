import React from 'react';
import SwapCart from "@/views/swap/components/cart/swapCart";
import ChartComponent from "@/views/swap/components/chart/chartComponent";

function SwapView() {
    return (
        <section className="w-full flex flex-wrap p-10">
            <SwapCart/>
            <ChartComponent/>
        </section>
    );
}

export default SwapView;