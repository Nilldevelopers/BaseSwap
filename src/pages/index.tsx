<<<<<<< HEAD
import WelcomeComponent from "@/components/WelcomeComponent";

export default function Home() {
    return (
        <main>
            {/* The button to open modal */}
            <label htmlFor="welcome_modal" className="btn">open modal</label>
            <WelcomeComponent/>
        </main>
=======

import Swap from "@/views/swap";
import Layout from "@/components/layout/Layout";
import React from "react";


export default function Home() {
    return (
        <Layout title="swap">
            <Swap/>
        </Layout>
>>>>>>> 23eee4098c5c774a0669021e42d95c4ba669df2e
    )
}
