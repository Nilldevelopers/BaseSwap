import React from 'react';
import Head from "next/head";
import LiquidityTable from "@/views/components/LiquidityTable";
import dynamic from "next/dynamic";

const LiquidityView = () => {


    return (
        <>
            <Head>
                <title>Create Next App</title>
            </Head>
            <div>

                <div className="container mx-auto px-4">
                    <h1 className="text-accent font-['Inter'] font-bold text-[48px] capitalize leading-[48px]">liquidity</h1>
                    <p>
                        For years parents have espoused the health benefits of eating garlic bread with cheese to their
                        children, with the food earning such an iconic status in our culture that kids will often dress
                        up as warm, cheesy loaf for Halloween.
                    </p>
                    <p>
                        But a recent study shows that the celebrated appetizer may be linked to a series of rabies cases
                        springing up around the country.
                    </p>


                    <button className="btn btn-primary">Button</button>

                    <LiquidityTable cols={['col1', 'col2', 'col3']}/>
                </div>
            </div>
        </>

    );
};


export default dynamic(Promise.resolve(LiquidityView), {ssr: false});