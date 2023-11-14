import React from 'react';
import Image from "next/image";
import SettingIcon from "@/assets/icons/setting.svg"
import MiniChartIcon from "@/assets/icons/miniCartIcon.svg"
import WalletIcon from "@/assets/icons/wallet.svg"
import PenIcon from "@/assets/icons/pen.svg"
import ArrowTopRight from "@/assets/icons/Arrow-top-right.svg"

function SwapCart() {
    return (
        <div className="w-4/12  p-2 flex flex-wrap">
            <div className="w-full flex justify-between items-center">
                <h4 className="text-xl font-bold text-white ">
                    Swap
                </h4>
                <figure className="flex">
                    <Image className="mx-1" src={SettingIcon} alt={"setting-button"}/>
                    <Image className="ms-1" src={MiniChartIcon} alt={"mini-chart-button"}/>
                </figure>
            </div>
            <div className="w-full bg-custom-cart p-2 flex flex-wrap items-center justify-between rounded-xl  mt-2">
                <div className="flex flex-wrap w-full items-center justify-between">
                    <figure className="flex items-center justify-between ">
                        <Image src={WalletIcon} alt={'wallet-icon'}/>
                        <figcaption className="text-white p-2">
                            <div className="font-bold">2.52370 ETH</div>
                            <div className="text-xs text-gray-400">2.52370 ETH</div>
                        </figcaption>
                    </figure>
                    <span className="text-gray-400 text-xs">
                        $1572.89
                </span>
                </div>
                <div className="w-full bg-custom-cart rounded-xl flex flex-wrap justify-between  p-2 ">
                    <input type="range" min={0} max="100"
                           className="range range-sm range-error bg-gray-500 rounded-md w-[82%]"/>
                    <div className="w-[15%] items-center  flex bg-custom-cart rounded-xl">
                        <span className="bg-gray-500 rounded-[5px] me-1 text-xs p-0.5"> 18% </span>
                        <Image src={PenIcon} alt="pen-icon"/>
                    </div>
                </div>
                <div className="w-full flex flex-wrap bg-custom-cart mt-5 rounded-xl">
                    <div className="w-full flex p-2 justify-between ">
                        <figure className="flex ">
                            <Image src={ArrowTopRight} alt={"ArrowTopRight"}/>
                            <figcaption className="text-xs text-gray-500 ms-2">You Pay</figcaption>
                        </figure>
                        <span className="text-xs text-gray-500 ms-2">
                        $1340.75
                    </span>
                    </div>
                    <div className="w-full  p-2 flex justify-between items-center">
                        <span className="text-xl">0.6399</span>
                        <div className="">
                            ETH
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
}

export default SwapCart;