/* eslint-disable */
import ImageImporter from "@/plugin/ImageImporter";
import {FaAngleDown} from "react-icons/fa";
import dynamic from "next/dynamic";
import {IToken, Token} from "@/interfaces/IToken";
import {ChangeEvent, useEffect, useState} from "react";
import {toast} from "react-toastify";
import {erc20, pair, swapPairFactory, swapRouter, weth} from "@/lib/ContractFunctions";
import {useBalance, usePublicClient, useWalletClient} from "wagmi";
import {formatEther} from "viem";
import {useAppDispatch} from "@/hooks/useAppDispatch";
import {setTokenData} from "@/store/actions/tokenChart";


const SelectTokenModal = dynamic(() => import('@/components/extra/SelectTokenModal'));
const SettingModal = dynamic(() => import("@/views/home/components/modals/SettingModal"));

interface ISwapCart {
    contractAddress: string,
    tokenData: IToken
}

const initialToken0: Token = {
    address: `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee`,
    chainId: 84531,
    decimals: 18,
    extensions: {
        bridgeInfo: {}
    },
    logoURI: "/img/icons/eth.svg",
    name: "Ethereum",
    symbol: "ETH"
}
const initialToken1: Token = {
    address: `0xB66540499d050fFA30e5a5D275bDA0E1176F1963`,
    chainId: 84531,
    decimals: 18,
    extensions: {
        bridgeInfo: {}
    },
    logoURI: "https://raw.githubusercontent.com/ve33-dex/SwapArchiveData/main/icon/0xB66540499d050fFA30e5a5D275bDA0E1176F1963.png",
    name: "BaseSwap",
    symbol: "BASES"
}

function SwapCart(props: ISwapCart) {
    const [rangeValue, setRangeValue] = useState<number>(0);
    const [gasStatus, setGasStatus] = useState<boolean>(false);
    const [tokenA, setTokenA] = useState<Token>(initialToken0);
    const [tokenB, setTokenB] = useState<Token>(initialToken1);

    const [historySelect, setHistorySelect] = useState<Token>(initialToken0);

    const changeOrder = () => {
        setTokenB(tokenA);
        setTokenA(historySelect);
    }
    useEffect(() => {
        setHistorySelect(tokenB)
    }, [tokenA, tokenB]);

    const publicClient = usePublicClient();
    const walletClient = useWalletClient();
    const dispatch = useAppDispatch()
    const [balanceOfTokenA, setBalanceOfTokenA] = useState<bigint>(BigInt(0));
    const [balanceOfTokenB, setBalanceOfTokenB] = useState<bigint>(BigInt(0));

    const [amountA, setAmountA] = useState<bigint>(BigInt(1000000000000000000));
    const [amountB, setAmountB] = useState<bigint>(BigInt(0));

    const [pairAddress, setPairAddress] = useState<`0x${string}`>('0x0000000000000000000000000000000000000000');

    const [reserveA, setReserveA] = useState<bigint>(BigInt(0));
    const [reserveB, setReserveB] = useState<bigint>(BigInt(0));

    const [userAddress, setUserAddress] = useState<`0x${string}`>('0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');

    const token0 = erc20(publicClient, walletClient.data, tokenA.address);
    const token1 = erc20(publicClient, walletClient.data, tokenB.address);

    const factory = swapPairFactory(publicClient, walletClient.data, '0xDFE9d201CC5865b45024C799Be47D11Db2E326ad');
    const router = swapRouter(publicClient, walletClient.data, '0xb8C8A49b1dc525Dbde457c0a045b1316Ecd7aD9a');
    const wETH = weth(publicClient, walletClient.data, '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80');

    function getAmountOut(amountIn: bigint, reserveIn: bigint, reserveOut: bigint): bigint {
        if (
            (tokenA.address == '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' &&
                tokenB.address == '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80') ||
            (tokenB.address == '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' &&
                tokenA.address == '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80')
        ) {
            return amountIn;
        }

        if (Number(amountIn) <= 0) {
            return BigInt(0);
        }

        if (Number(reserveIn) <= 0 || Number(reserveOut) <= 0) {
            return BigInt(0);
        }

        const amountInWithFee = Number(amountIn) * 9975;
        const numerator = amountInWithFee * Number(reserveOut);
        const denominator = Number(reserveIn) * 10000 + amountInWithFee;
        const amountOut = BigInt(Math.floor(numerator / denominator));

        return amountOut;
    }

    useEffect(() => {
        setAmountB(getAmountOut(amountA, reserveA, reserveB));
    }, [amountA])

    useEffect(() => {
        const pairContract = pair(publicClient, walletClient.data, pairAddress);

        async function fetchReserve() {
            const token0 = await pairContract.read.token0();
            const token1 = await pairContract.read.token1();
            const result = await pairContract.read.getReserves();

            if (tokenA.address === token0) {
                setReserveA(result[0]);
            } else if (tokenA.address === token1) {
                setReserveA(result[1]);
            }

            if (tokenB.address === token0) {
                setReserveB(result[0]);
            } else if (tokenB.address === token1) {
                setReserveB(result[1]);
            }

            if (token0 === '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80') {
                if (tokenA.address === '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80' || tokenA.address === '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
                    setReserveA(result[0]);
                } else if (tokenB.address === '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80' || tokenB.address === '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
                    setReserveB(result[0]);
                }
            } else if (token1 === '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80') {
                if (tokenA.address === '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80' || tokenA.address === '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
                    setReserveA(result[1]);
                } else if (tokenB.address === '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80' || tokenB.address === '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
                    setReserveB(result[1]);
                }
            }

            console.log(result, token0, token1, reserveA, reserveB, tokenA.address === token0, tokenB.address === token1);
        }

        if (pairAddress != '0x0000000000000000000000000000000000000000') {
            fetchReserve();
        } else {
            setReserveB(BigInt(0));
            setReserveA(BigInt(0));
        }
    }, [pairAddress, tokenA, tokenB])

    useEffect(() => {
        async function fetchPairAddress(token0Address: `0x${string}`, token1Address: `0x${string}`) {
            const address = await factory.read.getPair([token0Address, token1Address]);
            console.log(address);
            setPairAddress(address);
        }

        if (tokenA.address == '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
            fetchPairAddress('0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80', tokenB.address);
        } else if (tokenB.address == '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
            fetchPairAddress(tokenA.address, '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80');
        } else {
            fetchPairAddress(tokenA.address, tokenB.address);
        }
    }, [tokenA, tokenB]);

    useEffect(() => {
        if (walletClient.data) {
            setUserAddress(walletClient.data.account.address as `0x${string}`);
        }
    }, [walletClient])

    const {data: userETHBalance} = useBalance({
        address: userAddress,
    })

    useEffect(() => {
        setAmountA(balanceOfTokenA * BigInt(rangeValue) / BigInt(100));
    }, [rangeValue, tokenA])

    useEffect(() => {
        const fetchBalance = async () => {

            try {
                if (tokenA.address == '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
                    setBalanceOfTokenA(userETHBalance!.value);
                } else {
                    const balanceOfToken0 = await token0.read.balanceOf([userAddress]);
                    setBalanceOfTokenA(balanceOfToken0);
                }

                if (tokenB.address == '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
                    setBalanceOfTokenB(userETHBalance!.value);
                } else {
                    const balanceOfToken1 = await token1.read.balanceOf([userAddress]);
                    setBalanceOfTokenB(balanceOfToken1);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchBalance();
    }, [tokenA, tokenB, walletClient]);

    function updateInput(e: ChangeEvent<HTMLInputElement>) {
        setAmountA(BigInt(Number(e.target.value) * 1000000000000000000));
    }

    async function swapTokens() {
        if (pairAddress == '0x0000000000000000000000000000000000000000' &&
            tokenA.address != '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' &&
            tokenB.address != '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' &&
            tokenA.address != '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80' &&
            tokenB.address != '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80'
        ) {
            toast.error("The pair does not exist.");
        } else if (amountA <= balanceOfTokenA) {
            if (tokenA.address == '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
                if (tokenB.address == '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80') {
                    try {

                        // @ts-ignore
                        let swapTransaction = wETH.write.deposit([], {value: amountA})
                    } catch (e) {
                        console.log(e)
                    }
                } else {
                    try {

                        // @ts-ignore
                        let swapTransaction = router.write.swapETHForExactTokens(
                            [(amountB * 999n / 1000n), ['0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80', tokenB.address], userAddress, Date.now() + deadline * 60],
                            {value: amountA}
                        )
                    } catch (e) {
                        console.log(e)
                    }
                }
            } else if (tokenB.address == '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
                if (tokenA.address == '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80') {
                    try {

                        // @ts-ignore
                        let swapTransaction = wETH.write.withdraw([amountA])
                    } catch (e) {
                        console.log(e)
                    }
                } else {
                    try {
                        let allowance = await token0.read.allowance([userAddress, '0xb8C8A49b1dc525Dbde457c0a045b1316Ecd7aD9a']);
                        if (allowance < amountA) {

                            // @ts-ignore
                            let approveTransaction = token0.write.approve(['0xb8C8A49b1dc525Dbde457c0a045b1316Ecd7aD9a', amountA]);
                        }

                        // @ts-ignore
                        let swapTransaction = router.write.swapTokensForExactETH(
                            [(amountB * 999n / 1000n), amountA, [tokenA.address, '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80'], userAddress, Date.now() + deadline * 60]
                        );
                    } catch (e) {
                        console.log(e)
                    }
                }
            } else {
                try {
                    let allowance = await token0.read.allowance([userAddress, '0xb8C8A49b1dc525Dbde457c0a045b1316Ecd7aD9a']);
                    if (allowance < amountA) {

                        // @ts-ignore
                        let approveTransaction = token0.write.approve(['0xb8C8A49b1dc525Dbde457c0a045b1316Ecd7aD9a', amountA]);
                    }

                    // @ts-ignore
                    let swapTransaction = router.write.swapTokensForExactTokens(
                        [(amountB * 999n / 1000n), amountA, [tokenA.address, tokenB.address], userAddress, Date.now() + deadline * 60]
                    );
                } catch (e) {
                    console.log(e)
                }
            }
        }
    }

    const [tolerance, setTolerance] = useState<any>(0);
    const [speed, setSpeed] = useState<any>("Fast");
    const [deadline, setDeadline] = useState<any>(5);

    // @ts-ignore
    return (
        <div>
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
                                    dispatch(setTokenData(dataToken))
                                    dataToken === tokenB ? toast.error("token the same !") :
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

                                    dataToken === tokenA ? toast.error("token the same !") :
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
                            <div>{Number(formatEther(amountB * 999n / 1000n)).toFixed(10)} {tokenB.symbol}</div>
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
        </div>
    );
}

export default SwapCart;

