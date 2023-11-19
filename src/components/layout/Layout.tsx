import React, {memo} from 'react';
import dynamic from "next/dynamic";
import {Inter} from 'next/font/google'
import Head from "next/head";
import Navbar from "@/components/shared/Navbar";
import Link from "next/link";

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
            <Link passHref={true} href='/' className="right-0 absolute mx-12 rounded-[6px] pb-10">
                <div className="rounded-[6px] py-[5px] px-[11px] w-fit flex flex-row gap-[10px]">
                    <span className="capitalize text-success font-['Arial'] font-normal not-italic leading-0"></span>
                    <span
                        className="capitalize text-success font-['Arial'] font-normal not-italic leading-0">215454</span>
                </div>
            </Link>
        </>
    );
}

export default dynamic(Promise.resolve(memo(Layout)), {ssr: false});