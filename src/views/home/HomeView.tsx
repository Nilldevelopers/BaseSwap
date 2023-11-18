import React, {useEffect} from 'react';
import SwapCart from "@/views/home/components/cart/swapCart";
import {TVChartContainer} from "@/views/home/components/chart/chartComponent";


const HomeView = () => {

    return (
        <React.Fragment>
            {/*<label htmlFor="welcome_modal" className="btn">open modal</label>*/}
            {/*<WelcomeComponent/>*/}
            <section className="w-full flex flex-wrap md:p-10 mb-28 md:pb-0">
                <SwapCart/>
                <TVChartContainer/>
            </section>
        </React.Fragment>
    );
};

export default HomeView;