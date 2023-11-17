import React, {memo} from 'react';
import dynamic from "next/dynamic";
import {Inter} from 'next/font/google'
import Head from "next/head";
import Navbar from "@/components/shared/Navbar";

type PropsType = {
    children: React.ReactNode;
    title: string
}
const inter = Inter({subsets: ['vietnamese']})

function Layout({children, title}: PropsType) {
    return (
        <>
            <Head>
                <title>
                    {title ?? "Swap"}
                </title>
            </Head>
            <Navbar/>
            <main className={`w-full font-['Inter']  min-h-screen 2xl:container 2xl:mx-auto p-2`}>
                {children}
            </main>
        </>
    );
}

export default dynamic(Promise.resolve(memo(Layout)), {ssr: false});