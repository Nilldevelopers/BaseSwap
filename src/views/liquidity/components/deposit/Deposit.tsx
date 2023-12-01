import {IToken, Token} from "@/interfaces/IToken";
import ReverseInfo from "@/views/liquidity/components/deposit/ReverseInfo";
import ImageImporter from "@/plugin/ImageImporter";
import {FaAngleDown} from "react-icons/fa";
import SelectTokenModal from "@/components/extra/SelectTokenModal";
import {useEffect, useState} from "react";
import {useBalance, useBlockNumber, usePublicClient, useWalletClient} from "wagmi";
import {erc20, swapPairFactory, swapRouter} from "@/lib/ContractFunctions";
import {formatEther} from "viem";
import {toast} from "react-toastify";

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

const Deposit = (props: { tokenData: IToken }) => {
    const [userAddress, setUserAddress] = useState<`0x${string}`>('0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee');
    const [tokenA, setTokenA] = useState<Token>(initialToken0)
    const [tokenB, setTokenB] = useState<Token>(initialToken1)
    const [balanceOfTokenA, setBalanceOfTokenA] = useState<bigint>(BigInt(0))
    const [balanceOfTokenB, setBalanceOfTokenB] = useState<bigint>(BigInt(0))
    const publicClient = usePublicClient();
    const walletClient = useWalletClient();

    const [buttonText, setButtonText] = useState<string>('Enter an amount');

    const [amountA, setAmountA] = useState<bigint>(BigInt(0));
    const [amountB, setAmountB] = useState<bigint>(BigInt(0));

    const token0 = erc20(publicClient, walletClient.data, tokenA.address);
    const token1 = erc20(publicClient, walletClient.data, tokenB.address);

    const router = swapRouter(publicClient, walletClient.data, '0xb8C8A49b1dc525Dbde457c0a045b1316Ecd7aD9a');
    const factory = swapPairFactory(publicClient, walletClient.data, '0xDFE9d201CC5865b45024C799Be47D11Db2E326ad');

    const {data: blockNumber} = useBlockNumber();

    async function addLiquidity() {
        let token0Allowance = await token0.read.allowance([userAddress, '0xb8C8A49b1dc525Dbde457c0a045b1316Ecd7aD9a']);
        let token1Allowance = await token1.read.allowance([userAddress, '0xb8C8A49b1dc525Dbde457c0a045b1316Ecd7aD9a']);
        if (token0Allowance < parseFloat(amountA.toString())) {
            // @ts-ignore
            let transaction = await token0.write.approve(['0xb8C8A49b1dc525Dbde457c0a045b1316Ecd7aD9a', amountA]);
        }
        if (token1Allowance < parseFloat(amountB.toString())) {
            // @ts-ignore
            let transaction = await token1.write.approve(['0xb8C8A49b1dc525Dbde457c0a045b1316Ecd7aD9a', amountB]);
        }
        if (token0Allowance >= parseFloat(amountA.toString()) && token1Allowance >= parseFloat(amountB.toString())) {
            console.log([tokenA.address, tokenB.address, amountA, amountB, parseFloat(amountA.toString()) * 99 / 100, parseFloat(amountB.toString()) * 99 / 100, userAddress, Date.now() + 5 * 60])
            // @ts-ignore
            let transaction = await router.write.addLiquidity([tokenA.address, tokenB.address, amountA, amountB, parseFloat(amountA.toString()) * 99 / 100, parseFloat(amountB.toString()) * 99 / 100, userAddress, Date.now() + 5 * 60]);
        }
    }


    useEffect(() => {
        if (walletClient.data) {
            setUserAddress(walletClient.data.account.address as `0x${string}`);
        }
    }, [walletClient])

    const {data: userETHBalance} = useBalance({
        address: userAddress,
    })

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


    return (
        <div className="w-full p-2 flex flex-wrap ">
            <div className="w-full h-[300px] md:h-auto overflow-y-scroll px-2 -mt-7">
                <div
                    className="w-full border-gray-600 bg-custom-cart flex flex-wrap p-2 rounded-xl">
                    <div className="w-full flex flex-row justify-between p-1">
                        <div className="flex flex-row items-center">
                            <div className="text-gray-400 p-1 ">
                                Balance:
                            </div>
                            <div
                                className="w-2/6 p-2 font-bold text-gray-400">{Number(formatEther(balanceOfTokenA)).toFixed(10)}</div>
                        </div>

                        <div className="flex flex-row items-center gap-4">
                            <button onClick={() => setAmountA(balanceOfTokenA * BigInt(80) / BigInt(100))}
                                    className="w-1/6 p-2 hover:[text-shadow:_0px_5px_8px_#EF233C] flex items-center text-gray-400">20%
                            </button>
                            <button onClick={() => setAmountA(balanceOfTokenA * BigInt(50) / BigInt(100))}
                                    className="w-1/6 p-2 hover:[text-shadow:_0px_5px_8px_#EF233C] flex items-center text-gray-400">50%
                            </button>
                            <button onClick={() => setAmountA(balanceOfTokenA * BigInt(25) / BigInt(100))}
                                    className="w-1/6 p-2 hover:[text-shadow:_0px_5px_8px_#EF233C] flex items-center text-gray-400">75%
                            </button>
                            <button onClick={() => setAmountA(balanceOfTokenA)}
                                    className="w-1/6 p-2 hover:[text-shadow:_0px_5px_8px_#EF233C] flex items-center text-gray-400">MAX
                            </button>
                        </div>
                    </div>
                    <div className="w-full mt-5">
                        <div className="flex flex-row-reverse justify-between">
                            <div className="flex flex-row justify-between items-center p-2">
                                <label htmlFor="token_1"
                                       className="bg-transparent active:bg-gray-700 select-bordered select-sm ms-1 w-auto max-w-xs flex flex-row gap-[10px]">
                                    <ImageImporter w={35} h={20} src={tokenA.logoURI} alt={"symbol"}/>
                                    <span>{tokenA.symbol}</span>
                                </label>
                                <div className='mx-2'>
                                    <FaAngleDown/>
                                </div>
                                <SelectTokenModal
                                    tokenName={'token_1'}
                                    fetchSelectToken={(dataToken) => setTokenA(dataToken)}
                                    tokenList={props.tokenData}
                                />
                            </div>
                            <div>
                                <input value={Number(formatEther(amountA)).toFixed(10)} type="number" placeholder="Type here"
                                       className="input w-full max-w-xs bg-transparent"/>
                            </div>
                        </div>
                    </div>

                </div>
                <div
                    className="w-full border-gray-600 bg-custom-cart flex flex-wrap p-2 rounded-xl mt-5">
                    <div className="w-full flex flex-row justify-between p-1">
                        <div className="flex flex-row items-center">
                            <div className="text-gray-400 p-1 ">
                                Balance:
                            </div>
                            <div
                                className="w-2/6 p-2 font-bold text-gray-400">{Number(formatEther(balanceOfTokenB)).toFixed(10)}</div>
                        </div>

                        <div className="flex flex-row items-center gap-4">
                            <button onClick={() => setAmountB(balanceOfTokenB * BigInt(80) / BigInt(100))}
                                    className="w-1/6 p-2 hover:[text-shadow:_0px_5px_8px_#EF233C] flex items-center text-gray-400">20%
                            </button>
                            <button onClick={() => setAmountB(balanceOfTokenB * BigInt(50) / BigInt(100))}
                                    className="w-1/6 p-2 hover:[text-shadow:_0px_5px_8px_#EF233C] flex items-center text-gray-400">50%
                            </button>
                            <button onClick={() => setAmountB(balanceOfTokenB * BigInt(25) / BigInt(100))}
                                    className="w-1/6 p-2 hover:[text-shadow:_0px_5px_8px_#EF233C] flex items-center text-gray-400">75%
                            </button>
                            <button onClick={() => setAmountB(balanceOfTokenB)}
                                    className="w-1/6 p-2 hover:[text-shadow:_0px_5px_8px_#EF233C] flex items-center text-gray-400">MAX
                            </button>
                        </div>
                    </div>
                    <div className="w-full mt-5">
                        <div className="flex flex-row-reverse justify-between">
                            <div className="flex flex-row justify-between items-center p-2">
                                <label htmlFor="token_2"
                                       className="bg-transparent active:bg-gray-700 select-bordered select-sm ms-1 w-auto max-w-xs flex flex-row gap-[10px]">
                                    <ImageImporter w={35} h={20} src={tokenB.logoURI} alt={"symbol"}/>
                                    <span>{tokenB.symbol}</span>
                                </label>
                                <div className='mx-2'>
                                    <FaAngleDown/>
                                </div>
                                <SelectTokenModal
                                    tokenName={'token_2'}
                                    fetchSelectToken={(dataToken) => {
                                        if (dataToken===tokenA) {
                                            toast.error("Tokens can't be same!",{
                                                position: "top-right",
                                                autoClose: 5000,
                                                hideProgressBar: false,
                                                closeOnClick: true,
                                                pauseOnHover: true,
                                                draggable: true,
                                                progress: undefined,
                                                theme: "dark"
                                            });
                                        }else {
                                            setTokenB(dataToken)
                                        }
                                    }}
                                    tokenList={props.tokenData}
                                />
                            </div>
                            <div>
                                <input value={Number(formatEther(amountB)).toFixed(10)} type="number" placeholder="Type here"
                                       className="input w-full max-w-xs bg-transparent"/>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='w-full p-2 flex flex-wrap mt-5'>
                    <div className="flex flex-col w-full py-1">
                        <div className="divider divider-primary">Reserve Info</div>
                    </div>
                    <div className="w-full flex justify-between">
                        <span className="px-2">{Number(formatEther(amountA)).toFixed(2)}</span>
                        <span className="px-2">{Number(formatEther(amountB)).toFixed(2)}</span>
                        <span className="px-2">0.1%</span>
                    </div>
                    <div className="w-full flex justify-between">
                        <span className="px-2">{tokenA.symbol}</span>
                        <span className="px-2">{tokenB.symbol}</span>
                        <span className="px-2">Slippage</span>
                    </div>
                </div>
                {/*<ReverseInfo />*/}
                {/*<Balance/>*/}
                <div className="w-full my-2">
                    <button className="btn w-full bg-custom-red" onClick={addLiquidity}>
                        <span className="capitalize">{buttonText}</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Deposit;