import React from 'react';
import SwapCart from "@/components/swapComponent/cart/swapCart";
import ChartComponent from "@/components/swapComponent/chart/chartComponent";

function Swap() {
    return (
        <section className="w-full flex flex-wrap p-10">
            <SwapCart/>
            <ChartComponent/>
        </section>
    );
}

export default Swap;