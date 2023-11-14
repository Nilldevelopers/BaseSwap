// import WelcomeComponent from "@/components/WelcomeComponent";
import SwapView from "@/views/swap/SwapView";
import Layout from "@/components/layout/Layout";
import React from "react";
export default function Home() {

    return (
        <Layout title="swap">
            {/*<label htmlFor="welcome_modal" className="btn">open modal</label>*/}
            {/*<WelcomeComponent/>*/}
            <SwapView/>
        </Layout>
    )
}
