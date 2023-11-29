import ImageImporter from "@/plugin/ImageImporter";
import {FaAngleDown} from "react-icons/fa";
import dynamic from "next/dynamic";
import {Token} from "@/interfaces/IToken";
import {ChangeEvent, useEffect, useState} from "react";
import {toast} from "react-toastify";
import SettingModal from "@/views/home/components/modals/SettingModal";
import {formatEther} from "viem";
import useSwap from "@/hooks/web3/useSwap";
import {initialToken0, initialToken1} from "@/views/home/components/cart/initialSwap";
import {ISwapCart} from "@/interfaces/ISwapCart";


const SelectTokenModal = dynamic(() => import('@/components/extra/SelectTokenModal'));


function SwapCart(props: ISwapCart) {
    // test version
    const [rangeValue, setRangeValue] = useState<number>(0);
    const [gasStatus, setGasStatus] = useState<boolean>(false);
    const [tokenA, setTokenA] = useState<Token>(initialToken0);
    const [tokenB, setTokenB] = useState<Token>(initialToken1);
    const [amountA, setAmountA] = useState<bigint>(BigInt(1000000000000000000));
    const [amountB, setAmountB] = useState<bigint>(BigInt(0));

    const [historySelect, setHistorySelect] = useState<Token>(initialToken0);

    const changeOrder = () => {
        setTokenB(tokenA);
        setTokenA(historySelect);
    }
    useEffect(() => {
        setHistorySelect(tokenB)
    }, [tokenA, tokenB]);

    const [tolerance, setTolerance] = useState<any>(0);
    const [speed, setSpeed] = useState<any>("Fast");
    const [deadline, setDeadline] = useState<number>(5);
    const {
        balanceOfTokenA,
        balanceOfTokenB,
        swapTokens,
        getAmountOut,
        reserveA,
        reserveB
    } = useSwap(tokenA, tokenB, deadline, amountA, amountB)
    useEffect(() => {
        setAmountB(getAmountOut(amountA, reserveA, reserveB));
    }, [amountA])

    function updateInput(e: ChangeEvent<HTMLInputElement>) {
        setAmountA(BigInt(Number(e.target.value) * 1000000000000000000));
    }

    useEffect(() => {
        setAmountA(balanceOfTokenA * BigInt(rangeValue) / BigInt(100));
    }, [rangeValue, tokenA])


    return (
        <section className="md:w-4/12  p-2 flex flex-wrap">
            <div className="w-full flex justify-between items-center">
                <h4 className="text-xl font-bold text-white">
                    Swap
                </h4>
                <figure className="flex">
                    <button className="btn bg-transparent p-0 border-0 hover:bg-transparent ">
                        <label htmlFor="setting-modal">
                            <ImageImporter
                                w={20}
                                h={20}
                                className="mx-1 cursor-pointer"
                                src={"/img/icons/setting.svg"}
                                alt={"setting-button"}
                            />
                        </label>
                    </button>
                    <SettingModal
                        tolerance={tolerance}
                        setTolerance={setTolerance}
                        speed={speed}
                        setSpeed={setSpeed}
                        deadline={deadline}
                        setDeadline={setDeadline}
                    />
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
                            <div
                                className="font-bold">{Number(formatEther(balanceOfTokenA)).toFixed(10)} {tokenA.symbol}</div>
                        </figcaption>
                    </figure>
                </div>
                <div className="w-full bg-custom-cart rounded-xl flex flex-wrap justify-between  p-2 ">
                    <input
                        onChange={(e) => setRangeValue(Number(e?.target.value))}
                        type="range"
                        min={0} max="100"
                        defaultValue={rangeValue}
                        className="range range-sm range-error  rounded-md w-[82%]"/>
                    <div className="w-[15%] items-center  flex bg-custom-cart rounded-xl">
                        <span className="bg-gray-500 rounded-[5px] me-1 text-xs p-0.5"> {rangeValue}% </span>
                        <ImageImporter w={20} h={20} src={"/img/icons/Edit.jpg"} alt="pen-icon"/>
                    </div>
                </div>
                <div className="w-full flex flex-wrap bg-custom-cart mt-5 rounded-xl">
                    <div className="w-full flex p-2 justify-between ">
                        <figure className="flex ">
                            <ImageImporter w={20} h={20} src={"/img/icons/Arrow-top-right.svg"} alt={"ArrowTopRight"}/>
                            <figcaption className="text-xs text-gray-500 ms-2">You Pay</figcaption>
                        </figure>
                    </div>
                    <div className="w-full p-2 flex justify-between items-center">
                        <input className="text-xl p-2 bg-transparent w-1/2 input"
                               value={Number(formatEther(amountA)).toFixed(10)} onChange={(e) => updateInput(e)}/>
                        <div className="flex flex-row justify-center items-center">
                            <label htmlFor="first_token_modal"
                                   className="bg-transparent active:bg-gray-700 select-bordered select-sm ms-1 w-auto max-w-xs flex flex-row gap-[10px]">
                                <ImageImporter w={35} h={20} src={tokenA.logoURI} alt={"symbol"}/>
                                <span>{tokenA.symbol}</span>
                            </label>
                            <FaAngleDown/>
                            <SelectTokenModal
                                tokenName="first_token_modal"
                                fetchSelectToken={(dataToken) => {
                                    dataToken === tokenB ? toast.error("token the same !", {
                                            position: "top-right",
                                            autoClose: 5000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                            theme: "dark"
                                        }) :
                                        setTokenA(dataToken)
                                }}
                                tokenList={props.tokenData}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex relative justify-center items-center">
                <button
                    onClick={changeOrder}
                    className="absolute active:scale-90 duration-100 ">
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
                            <div
                                className="font-bold">{Number(formatEther(balanceOfTokenB)).toFixed(10)} {tokenB.symbol}</div>
                        </figcaption>
                    </figure>
                </div>
                <div className="w-full flex flex-wrap bg-custom-cart mt-5 rounded-xl">
                    <div className="w-full flex p-2 justify-between ">
                        <figure className="flex ">
                            <ImageImporter w={20} h={20} src={"/img/icons/arrow-left-bottom.svg"}
                                           alt={"ArrowBottomLeft"}/>
                            <figcaption className="text-xs text-gray-500 ms-2">You Receive</figcaption>
                        </figure>
                    </div>
                    <div className="w-full p-2 flex justify-between items-center">
                        <div
                            className="text-xl p-2 bg-transparent w-1/2"> {Number(formatEther(amountB)).toFixed(10)} </div>
                        <div className="flex flex-row justify-center items-center">
                            <label
                                htmlFor="second_token_modal"
                                className="bg-transparent active:bg-gray-700 select-bordered select-sm ms-1 w-auto max-w-xs flex flex-row gap-[10px]"
                            >
                                <ImageImporter w={35} h={20} src={tokenB.logoURI} alt={"symbol"}/>
                                <span>{tokenB.symbol}</span>
                            </label>
                            <FaAngleDown/>
                            <SelectTokenModal
                                tokenName="second_token_modal"
                                fetchSelectToken={(dataToken) => {

                                    dataToken === tokenA ? toast.error("token the same !", {
                                            position: "top-right",
                                            autoClose: 5000,
                                            hideProgressBar: false,
                                            closeOnClick: true,
                                            pauseOnHover: true,
                                            draggable: true,
                                            progress: undefined,
                                            theme: "dark"
                                        }) :
                                        setTokenB(dataToken)
                                }}
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
                        1 {tokenA.symbol} = {formatEther(getAmountOut(BigInt(1000000000000000000), reserveA, reserveB))} {tokenB.symbol}
                    </div>
                </div>
                <button onClick={() => gasStatus ? setGasStatus(false) : setGasStatus(true)}
                        className="w-1/3 flex  p-1 bg-transparent items-center justify-end ">
                    <ImageImporter w={20} h={20} src={"/img/icons/gas.svg"} alt={"gas-icon"}/>
                    <div className="font-bold text-xs px-2 flex">
                        $0.99
                    </div>
                    <ImageImporter w={8} h={8}
                                   className={gasStatus ? "rotate-90 duration-300" : " duration-300 rotate-0"}
                                   src={"/img/icons/arrow-right.svg"} alt={"arrow-right"}/>
                </button>
                {gasStatus && (
                    <div
                        className={`flex w-full flex-wrap text-xs  font-bold content-start overflow-hidden duration-300 ${gasStatus ? "h-[200px] border-t my-4" : "h-0 p-0 my-4"} `}>
                        <div className="flex flex-wrap w-full justify-between items-center py-2 my-1 ">
                            <div className="text-gray-400">Network fee</div>
                            <div>{'<'}$0.99</div>
                        </div>
                        <div className="flex flex-wrap w-full justify-between items-center py-2 my-1 ">
                            <div className="text-gray-400">Price impact</div>
                            <div>0.1%</div>
                        </div>
                        <div className="flex flex-wrap w-full justify-between items-center py-2 my-1 ">
                            <div className="text-gray-400">Minimum output</div>
                            <div>{Number(formatEther(BigInt(Number(amountB) * 999 / 1000))).toFixed(10)} {tokenB.symbol}</div>
                        </div>
                        <div className="flex flex-wrap w-full justify-between items-center py-2 my-1 ">
                            <div className="text-gray-400">Expected output</div>
                            <div>{Number(formatEther(amountB)).toFixed(10)} {tokenB.symbol}</div>
                        </div>
                        <div className="flex flex-wrap w-full justify-between items-center py-2 my-1 mt-3 border-t ">
                            <div className="text-gray-400">Routing source</div>
                            <div>BaseSwap</div>
                        </div>
                        {/*<div className="flex flex-wrap w-full justify-between items-center p-2 my-3 ">*/}
                        {/*    <button className="btn btn-outline m-0  bg-transparent w-2/12 p-2 border rounded"></button>*/}
                        {/*    <div className="w-3/12 border"></div>*/}
                        {/*    <button className="btn btn-outline m-0  bg-transparent w-2/12 p-2 border rounded"></button>*/}
                        {/*    <div className="w-3/12 border"></div>*/}
                        {/*    <button className="btn btn-outline m-0  bg-transparent w-2/12 p-2 border rounded"></button>*/}
                        {/*</div>*/}
                    </div>
                )}
            </div>
            <div className="w-full flex">
                <button className="btn w-full bg-custom-red" onClick={() => swapTokens()}>Swap</button>
            </div>
        </section>
    );
}

export default SwapCart;

