import React from 'react';
import LiquidityTable from "@/views/liquidity/components/LiquidityTable";
import dynamic from "next/dynamic";

const LiquidityView = () => {
    return (
        <>
            <div className="container mx-auto px-4">
                <h1 className="text-accent font-['Inter'] font-bold text-[48px] capitalize leading-[48px] pt-14">liquidity</h1>

                <div className="pt-12">
                    buttons & search & switch
                </div>

                <div className='pt-10'>
                    <LiquidityTable rows={[1, 2, 3, 4, 5, 6]}
                                    cols={['Name', 'ARP', 'Total Staked', 'My Staked', 'My Pool', 'Earnings']}/>
                </div>
            </div>
        </>
    );
};


export default dynamic(Promise.resolve(LiquidityView), {ssr: false});