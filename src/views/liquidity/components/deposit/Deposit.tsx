import {IToken, Token} from "@/interfaces/IToken";
import ReverseInfo from "@/views/liquidity/components/deposit/ReverseInfo";
import Balance from "@/views/liquidity/components/deposit/Balance";
import ImageImporter from "@/plugin/ImageImporter";
import {FaAngleDown} from "react-icons/fa";
import SelectTokenModal from "@/components/extra/SelectTokenModal";
import {useEffect, useState} from "react";
import {usePublicClient} from "wagmi";
import {useEthersSigner} from "@/hooks/contracts/useEthersSigner";
import {erc20} from "@/lib/ContractFunctions";
import {formatEther} from "viem";

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
    const [userAddress, setUserAddress] = useState<`ox${string}`>('0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' as `ox${string}`);
    const [tokenA, setTokenA] = useState<Token>(initialToken0)
    const [tokenB, setTokenB] = useState<Token>(initialToken1)
    const [balanceOfTokenA, setBalanceOfTokenA] = useState<bigint>(BigInt(0))
    const [balanceOfTokenB, setBalanceOfTokenB] = useState<bigint>(BigInt(0))
    const publicClient = usePublicClient();
    const walletClient = useEthersSigner();


    useEffect(() => {
        const token0 = erc20(publicClient, walletClient, tokenA.address);
        const token1 = erc20(publicClient, walletClient, tokenB.address);
        const fetchData = async () => {

            try {
                if (tokenA.address == '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
                    setBalanceOfTokenA(userETHBalance.value);
                }else {
                    const balanceOfToken0 = await token0.read.balanceOf([userAddress]);
                    setBalanceOfTokenA(balanceOfToken0);
                }

                if (tokenB.address == '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
                    setBalanceOfTokenB(userETHBalance.value);
                }else {
                    const balanceOfToken1 = await token1.read.balanceOf([userAddress]);
                    setBalanceOfTokenB(balanceOfToken1);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
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
                                className="w-2/6 p-2 font-bold text-gray-400">{tokenA.address === `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee` ? '' : formatEther(balanceOfTokenA)}</div>
                        </div>

                        <div className="flex flex-row items-center gap-4">
                            <button
                                className="w-1/6 p-2 hover:[text-shadow:_0px_5px_8px_#EF233C] flex items-center text-gray-400">20%
                            </button>
                            <button
                                className="w-1/6 p-2 hover:[text-shadow:_0px_5px_8px_#EF233C] flex items-center text-gray-400">50%
                            </button>
                            <button
                                className="w-1/6 p-2 hover:[text-shadow:_0px_5px_8px_#EF233C] flex items-center text-gray-400">75%
                            </button>
                            <button
                                className="w-1/6 p-2 hover:[text-shadow:_0px_5px_8px_#EF233C] flex items-center text-gray-400">MAX
                            </button>
                        </div>
                    </div>
                    <div className="w-full mt-5">
                        <div className="flex flex-row-reverse justify-between">
                            <div className="flex flex-row justify-between items-center p-2">
                                <label htmlFor={'token_1'}
                                       className="bg-transparent active:bg-gray-700 select-bordered select-sm ms-1 w-20 max-w-xs flex flex-row gap-[10px]">
                                    <ImageImporter w={35} h={35} src={tokenA.logoURI} alt={"symbol"}/>
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
                                <input defaultValue={20} type="number" placeholder="Type here"
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
                            <div className="w-2/6 p-2 font-bold text-gray-400">{formatEther(balanceOfTokenB)}</div>
                        </div>

                        <div className="flex flex-row items-center gap-4">
                            <button
                                className="w-1/6 p-2 hover:[text-shadow:_0px_5px_8px_#EF233C] flex items-center text-gray-400">20%
                            </button>
                            <button
                                className="w-1/6 p-2 hover:[text-shadow:_0px_5px_8px_#EF233C] flex items-center text-gray-400">50%
                            </button>
                            <button
                                className="w-1/6 p-2 hover:[text-shadow:_0px_5px_8px_#EF233C] flex items-center text-gray-400">75%
                            </button>
                            <button
                                className="w-1/6 p-2 hover:[text-shadow:_0px_5px_8px_#EF233C] flex items-center text-gray-400">MAX
                            </button>
                        </div>
                    </div>
                    <div className="w-full mt-5">
                        <div className="flex flex-row-reverse justify-between">
                            <div className="flex flex-row justify-between items-center p-2">
                                <label htmlFor={'token_2'}
                                       className="bg-transparent active:bg-gray-700 select-bordered select-sm ms-1 w-20 max-w-xs flex flex-row gap-[10px]">
                                    <ImageImporter w={35} h={35} src={tokenB.logoURI} alt={"symbol"}/>
                                    <span>{tokenB.symbol}</span>
                                </label>
                                <div className='mx-2'>
                                    <FaAngleDown/>
                                </div>
                                <SelectTokenModal
                                    tokenName={'token_2'}
                                    fetchSelectToken={(dataToken) => setTokenB(dataToken)}
                                    tokenList={props.tokenData}
                                />
                            </div>
                            <div>
                                <input defaultValue={20} type="number" placeholder="Type here"
                                       className="input w-full max-w-xs bg-transparent"/>
                            </div>
                        </div>
                    </div>

                </div>
                <ReverseInfo/>
                <Balance/>
                <div className="w-full my-2">
                    <button className="btn w-full bg-custom-red">
                        <span className="capitalize">Enter an amount</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Deposit;