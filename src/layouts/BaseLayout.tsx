import Head from "next/head";
import Navbar from "@/components/shared/Navbar";
import Link from "next/link";
import useWallet from "@/hooks/contracts/useWallet";
import {ReactNode} from "react";


type PropsType = {
    children: ReactNode;
    title: string
}

function BaseLayout({children, title}: PropsType) {
    const walletData = useWallet()
    return (
        <>
            <Head>
                <title>
                    {title ?? "Swap"}
                </title>
            </Head>
            <Navbar/>
            <main className={`w-full font-['Inter'] overflow-hidden  min-h-screen mb-10 2xl:mb-0 2xl:container 2xl:mx-auto p-2`}>
                {children}
            </main>
            <Link passHref={true} href='/' className="right-0 z-0 absolute mx-12 rounded-[6px] pb-10">
                <div className="rounded-[6px] py-[5px] px-[11px] w-fit flex flex-row gap-[10px]">
                    <div className="flex text-green-400 flex-wrap btn w-full justify-end items-center">
                    {walletData.blockNumber}
                    </div>
                </div>
            </Link>
        </>
    );
}

export default BaseLayout;