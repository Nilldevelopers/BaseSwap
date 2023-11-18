import React from 'react';
import SwapCart from "@/views/home/components/cart/swapCart";
import {TVChartContainer} from "@/views/home/components/chart/chartComponent";
import {WETH__factory} from "@/contracts";
import {useEthersProvider} from "@/hooks/useEthersProvider";
import {useEthersSigner} from "@/hooks/useEthersSigner";

const HomeView = () => {
    const test = WETH__factory.connect("0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80")
    // const provider = new ethers.JsonRpcProvider("https://goerli.base.org")
    const provider = useEthersProvider()
    const signer = useEthersSigner()

    console.log({
        provider,
        signer
    })
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