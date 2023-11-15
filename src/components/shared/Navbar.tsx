import React, {memo} from 'react';
import Image from "next/image";
import ConnectWalletButton from "@/components/extra/ConnectWalletButton";
import {Inter} from 'next/font/google'
import Link from "next/link";

const inter = Inter({subsets: ['vietnamese']})
const Navbar = () => {
    return (
        <header className={`w-full p-2  2xl:container 2xl:mx-auto flex  ${inter.className}`}>
            <figure className="flex justify-start items-center w-3/12 ">
                <Image src={'/img/logo/SwapLogo.svg'} className="p-1" alt={"swap-logo"} width={50} height={50}/>
                <Image src={'/img/logo/baseCoin.svg'} className="p-1 mt-2" alt={"base-swap"} width={121} height={12}/>
            </figure>
            <nav className="w-6/12 flex justify-center items-center">
                <ul className="w-full flex justify-center items-center relative">
                    <li className="text-gray-400 duration-100 hover:text-white border-b border-b-transparent hover:border-b-white mx-3 cursor-pointer">
                        <Link passHref={true} href='/'>Swap</Link>
                    </li>
                    <li className="text-gray-400 duration-100 hover:text-white border-b border-b-transparent hover:border-b-white mx-3 cursor-pointer">
                        <Link passHref={true} href='/liquidity'>Liquidity</Link>
                    </li>
                    <li className="text-gray-400 duration-100 hover:text-white border-b border-b-transparent hover:border-b-white mx-3 cursor-pointer  group">
                        Socials
                        <ul className="w-fit border absolute top-full mt-3 p-2 opacity-0 group-hover:opacity-100 duration-200">
                            سلام محمد و فردین
                        </ul>
                    </li>
                </ul>
            </nav>
            <div className="w-3/12 flex justify-end">
                <ConnectWalletButton/>
            </div>
        </header>
    );
};

export default memo(Navbar);