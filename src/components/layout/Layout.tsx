import React from 'react';
import dynamic from "next/dynamic";
import { Inter } from 'next/font/google'
import Head from "next/head";
import swapLogo from "../../../public/img/logo/SwapLogo.svg"
import baseCoinText from "../../../public/img/logo/baseCoin.svg"
import Image from "next/image";
type PropsType = {
    children : React.ReactNode ;
    title : string
}
const inter = Inter({ subsets: ['vietnamese'] })
function Layout({children , title} : PropsType) {
    return (
        <>
            <Head>
                <title>
                    {title ?? "Swap"}
                </title>
            </Head>
            <header className={`w-full p-2  2xl:container 2xl:mx-auto flex  ${inter.className}`}>
                <figure className="flex justify-start items-center w-3/12 ">
                    <Image src={swapLogo} className="p-1" alt={"swap-logo"}/>
                    <Image src={baseCoinText} className="p-1 mt-2" alt={"base-swap"}/>
                </figure>
                <nav className="w-6/12 flex justify-center items-center">
                    <ul className="w-full flex justify-center items-center relative">
                        <li className="text-gray-400 duration-100 hover:text-white border-b border-b-transparent hover:border-b-white mx-3 cursor-pointer">Swap</li>
                        <li className="text-gray-400 duration-100 hover:text-white border-b border-b-transparent hover:border-b-white mx-3 cursor-pointer">Liquidity</li>
                        <li className="text-gray-400 duration-100 hover:text-white border-b border-b-transparent hover:border-b-white mx-3 cursor-pointer  group">
                            Socials
                            <ul className="w-fit border absolute top-full mt-3 p-2 opacity-0 group-hover:opacity-100 duration-200">
                                    سلام محمد و فردین
                            </ul>
                        </li>
                    </ul>
                </nav>
                <div className="w-3/12 flex justify-end">
                    <button className="btn text-white w-48 bg-custom-red">
                        Connect Wallet
                    </button>
                </div>
            </header>
            <main className={`w-full  min-h-screen 2xl:container 2xl:mx-auto p-2 ${inter.className}`}>
                {children}
            </main>
        </>
    );
}

export default dynamic(Promise.resolve(Layout),{ssr : false});