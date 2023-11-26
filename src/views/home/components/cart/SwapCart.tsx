import ImageImporter from "@/plugin/ImageImporter";
import {FaAngleDown} from "react-icons/fa";
import dynamic from "next/dynamic";
import {GetAccountResult} from "@wagmi/core";
import {IToken} from "@/interfaces/IToken";
import { useState } from "react";


const SelectTokenModal = dynamic(() => import('@/components/extra/SelectTokenModal'));

interface ISwapCart {
    contractAddress: string,
    walletInfo: GetAccountResult,
    tokenData: IToken
}

function SwapCart(props: ISwapCart) {

    const [ gasStatus , setGasStatus] = useState<boolean>(false)


    return (
        <section className="md:w-4/12  p-2 flex flex-wrap">
            <div className="w-full flex justify-between items-center">
                <h4 className="text-xl font-bold text-white">
                    Swap
                </h4>
                <figure className="flex">
                    <ImageImporter w={20} h={20} className="mx-1" src={"/img/icons/setting.svg"}
                                   alt={"setting-button"}/>
                    <ImageImporter w={20} h={20} className="ms-1" src={"/img/icons/miniCartIcon.svg"}
                                   alt={"mini-chart-button"}/>
                </figure>
            </div>
            <div className="w-full bg-custom-cart p-2 flex flex-wrap items-center justify-between rounded-xl  mt-2">
                <div className="flex flex-wrap w-full items-center justify-between">
                    <figure className="flex items-center justify-between ">
                        <ImageImporter w={20} h={20} src={"/img/icons/wallet.svg"} alt={'wallet-icon'}/>
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
                           className="range range-sm range-error  rounded-md w-[82%]"/>
                    <div className="w-[15%] items-center  flex bg-custom-cart rounded-xl">
                        <span className="bg-gray-500 rounded-[5px] me-1 text-xs p-0.5"> 18% </span>
                        <ImageImporter w={20} h={20} src={"/img/icons/Edit.jpg"} alt="pen-icon"/>
                    </div>
                </div>
                <div className="w-full flex flex-wrap bg-custom-cart mt-5 rounded-xl">
                    <div className="w-full flex p-2 justify-between ">
                        <figure className="flex ">
                            <ImageImporter w={20} h={20} src={"/img/icons/Arrow-top-right.svg"} alt={"ArrowTopRight"}/>
                            <figcaption className="text-xs text-gray-500 ms-2">You Pay</figcaption>
                        </figure>
                        <span className="text-xs text-gray-500 ms-2">
                        $1340.75
                    </span>
                    </div>
                    <div className="w-full p-2 flex justify-between items-center">
                        <span className="text-xl">0.6399</span>
                        <div className="flex flex-row justify-center items-center">


                            <label htmlFor="first_token_modal"
                                   className="bg-transparent active:bg-gray-700 select-bordered select-sm ms-1 w-20 max-w-xs flex flex-row gap-[10px]">
                                <ImageImporter w={20} h={20} src={"/img/icons/usdt.svg"} alt={"symbol"}/>
                                <span>ETH</span>
                            </label>
                            <FaAngleDown/>
                            <SelectTokenModal
                                tokenName="first_token_modal"
                                fetchSelectToken={(dataToken) => console.log(dataToken)}
                                tokenList={props.tokenData}
                            />

                            {/*<button*/}
                            {/*    disabled={!write}*/}
                            {/*    onClick={() =>*/}
                            {/*        write({*/}
                            {/*            args: [],*/}
                            {/*            value: parseEther('0.01'),*/}
                            {/*        })*/}
                            {/*    }*/}
                            {/*>*/}
                            {/*    Claim*/}
                            {/*</button>*/}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex relative justify-center items-center">
                <button className="absolute active:scale-90 duration-100 ">
                    <ImageImporter src={"/img/icons/swap-arrow.svg"} alt={"SwapArrow"} w={40} h={40}
                                   className="flex -left-1 -top-1"/>
                </button>
            </div>
            <div className="w-full bg-custom-cart p-2 flex flex-wrap items-center justify-between rounded-xl  mt-2">
                <div className="flex flex-wrap w-full items-center justify-between">
                    <figure className="flex items-center justify-between ">
                        <ImageImporter w={20} h={20} src={"/img/icons/wallet.svg"} alt={'wallet-icon'}/>
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
                            <ImageImporter w={20} h={20} src={"/img/icons/arrow-left-bottom.svg"}
                                           alt={"ArrowBottomLeft"}/>
                            <figcaption className="text-xs text-gray-500 ms-2">You Receive</figcaption>
                        </figure>
                        <span className="text-xs text-gray-500 ms-2">
                        $1340.75
                    </span>
                    </div>
                    <div className="w-full p-2 flex justify-between items-center">
                        <span className="text-xl">0.6399</span>
                        <div className="flex flex-row justify-center items-center">
                            <label
                                htmlFor="second_token_modal"
                                className="bg-transparent active:bg-gray-700 select-bordered select-sm ms-1 w-20 max-w-xs flex flex-row gap-[10px]"
                            >
                                <ImageImporter w={20} h={20} src={"/img/icons/usdt.svg"} alt={"symbol"}/>
                                <span>ETH</span>
                            </label>
                            <FaAngleDown/>
                            <SelectTokenModal
                                tokenName="second_token_modal"
                                fetchSelectToken={(dataToken) => console.log(dataToken)}
                                tokenList={props.tokenData}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-wrap p-2 ">
                <div className="w-2/3 flex items-center">
                    <ImageImporter w={20} h={20} src={"/img/icons/info-circle-light.svg"} alt={"info-icon"}/>
                    <div className="font-bold text-xs ps-2">
                        1 ETH = 6827.00011 aVAX
                    </div>
                </div>
                <button onClick={() => gasStatus ? setGasStatus(false) : setGasStatus(true)} className="w-1/3 flex  p-1 bg-transparent items-center justify-end ">
                    <ImageImporter w={20} h={20} src={"/img/icons/gas.svg"} alt={"gas-icon"}/>
                    <div className="font-bold text-xs px-2 flex">
                        $8.99
                    </div>
                    <ImageImporter w={8} h={8} className={gasStatus ? "rotate-90 duration-300" : " duration-300 rotate-0"} src={"/img/icons/arrow-right.svg"} alt={"arrow-right"}/>
                </button>
                {gasStatus && (
                    <div className={`flex w-full flex-wrap border  content-start overflow-hidden duration-300 ${gasStatus ? "h-[340px] border-t my-4" : "h-0 p-0 my-4"} `}>
                        <div className="flex flex-wrap w-full justify-between items-center p-2 my-1 ">
                            <div className="text-gray-400">Network fee</div>
                            <div>~$0.13</div>
                        </div>
                        <div className="flex flex-wrap w-full justify-between items-center p-2 my-1 ">
                            <div className="text-gray-400">Price impact</div>
                            <div>-0.09%</div>
                        </div>
                        <div className="flex flex-wrap w-full justify-between items-center p-2 my-1 ">
                            <div className="text-gray-400">Minimum output</div>
                            <div>4.1124 Token1</div>
                        </div>
                        <div className="flex flex-wrap w-full justify-between items-center p-2 my-1 ">
                            <div className="text-gray-400">Expected output</div>
                            <div>4.38124 Token1</div>
                        </div>
                        <div className="flex flex-wrap w-full justify-between items-center p-2 my-1 mt-3 border-t ">
                            <div className="text-gray-400">Routing source</div>
                            <div>Uniswap</div>
                        </div>
                        <div className="flex flex-wrap w-full justify-between items-center p-2 my-3 ">
                            <button className="btn btn-outline m-0  bg-transparent w-2/12 p-2 border rounded"></button>
                            <div className="w-3/12 border"></div>
                            <button className="btn btn-outline m-0  bg-transparent w-2/12 p-2 border rounded"></button>
                            <div className="w-3/12 border"></div>
                            <button className="btn btn-outline m-0  bg-transparent w-2/12 p-2 border rounded"></button>
                        </div>
                    </div>
                )}
            </div>
            <div className="w-full flex ">
                <button className="btn w-full bg-custom-red">Swap</button>
            </div>
        </section>
    );
}

export default SwapCart;

