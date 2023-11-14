import React from 'react';
import Image from "next/image";
import SettingIcon from "@/assets/icons/setting.svg"
import MiniChartIcon from "@/assets/icons/miniCartIcon.svg"
import WalletIcon from "@/assets/icons/wallet.svg"
import PenIcon from "@/assets/icons/pen.svg"
import ArrowTopRight from "@/assets/icons/Arrow-top-right.svg"
import ArrowBottomLeft from "@/assets/icons/arrow-left-bottom.svg"
import InfoIcon from "@/assets/icons/info-circle-light.svg"
import GasIcon from "@/assets/icons/gas.svg"
import ArrowRight from "@/assets/icons/arrow-right.svg"
import SwapArrow from "@/assets/icons/swap-arrow.svg"
import ETHLogo from "@/assets/icons/usdt.svg"

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
                        <span className="p-0.5 ms-0.5 border rounded-full border-green-400"> </span>
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
                    <div className="w-full p-2 flex justify-between items-center">
                        <span className="text-xl">0.6399</span>
                        <div className="flex">
                            <Image src={ETHLogo} alt={"symbol"}/>
                            <select className="select select-bordered select-sm ms-1 w-28 max-w-xs">
                                <option disabled selected>ETH</option>
                                <option>ETH ETH</option>
                                <option>ETH ETH</option>
                                <option>ETH ETH</option>
                            </select>

                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex relative justify-center items-center">
                <button className="absolute active:scale-90 duration-100 ">
                    <Image src={SwapArrow} alt={"SwapArrow"} width={40} className="flex -left-1 -top-1" />
                </button>
            </div>
            <div className="w-full bg-custom-cart p-2 flex flex-wrap items-center justify-between rounded-xl  mt-2">
                <div className="flex flex-wrap w-full items-center justify-between">
                    <figure className="flex items-center justify-between ">
                        <Image src={WalletIcon} alt={'wallet-icon'}/>
                        <span className="p-0.5 ms-0.5 border rounded-full border-red-600"> </span>
                        <figcaption className="text-white p-2">
                            <div className="font-bold">2.52370 ETH</div>
                            <div className="text-xs text-gray-400">2.52370 ETH</div>
                        </figcaption>
                    </figure>
                    <span className="text-gray-400 text-xs">
                        $1572.89
                </span>
                </div>
                <div className="w-full flex flex-wrap bg-custom-cart mt-5 rounded-xl">
                    <div className="w-full flex p-2 justify-between ">
                        <figure className="flex ">
                            <Image src={ArrowBottomLeft} alt={"ArrowBottomLeft"}/>
                            <figcaption className="text-xs text-gray-500 ms-2">You Receive</figcaption>
                        </figure>
                        <span className="text-xs text-gray-500 ms-2">
                        $1340.75
                    </span>
                    </div>
                    <div className="w-full p-2 flex justify-between items-center">
                        <span className="text-xl">0.6399</span>
                        <div className="flex">
                            <Image src={ETHLogo} alt={"symbol"}/>
                            <select className="select select-bordered select-sm ms-1 w-28 max-w-xs">
                                <option disabled selected>ETH</option>
                                <option>ETH ETH</option>
                                <option>ETH ETH</option>
                                <option>ETH ETH</option>
                            </select>

                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex p-2 ">
                <div className="w-2/3 flex">
                    <Image src={InfoIcon} alt={"info-icon"}/>
                    <div className="font-bold text-xs ps-2">
                        1 ETH = 6827.00011 aVAX
                    </div>
                </div>
                <div className="w-1/3 flex items-center justify-end ">
                    <Image src={GasIcon} alt={"gas-icon"}/>
                    <div className="font-bold text-xs px-1.5 flex">
                        $8.99
                    </div>
                    <Image src={ArrowRight} alt={"arrow-right"}/>
                </div>
            </div>
            <div className="w-full flex mt-2">
                <button className="btn w-full bg-custom-red" >Swap</button>
            </div>
        </div>
    );
}

export default SwapCart;