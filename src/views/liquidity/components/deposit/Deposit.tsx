import {IToken, Token} from "@/interfaces/IToken";
import ReverseInfo from "@/views/liquidity/components/deposit/ReverseInfo";
import Balance from "@/views/liquidity/components/deposit/Balance";
import ImageImporter from "@/plugin/ImageImporter";
import {FaAngleDown} from "react-icons/fa";
import SelectTokenModal from "@/components/extra/SelectTokenModal";
import {useEffect, useState} from "react";
import FetchTokenBalance from "@/lib/FetchTokenBalance";


const Deposit = (props: { tokenData: IToken }) => {
    const [tokenA, setTokenA] = useState<Token>()
    const [tokenB, setTokenB] = useState<Token>()
    const [balanceOfTokenA, setBalanceOfTokenA] = useState<string>('0')
    const [balanceOfTokenB, setBalanceOfTokenB] = useState<string>('0')

    useEffect(() => {
        if (tokenA) {
            // Call useTokenBalanceOf with tokenA
            const tokenBalance = FetchTokenBalance(tokenA.address);
            setBalanceOfTokenA(tokenBalance.toString())
        }

        if (tokenB) {
            // Call useTokenBalanceOf with tokenB
            const tokenBalance = FetchTokenBalance(tokenB.address);
            setBalanceOfTokenB(tokenBalance.toString())
        }
    }, [tokenA, tokenB]);

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
                            <div className="w-2/6 p-2 font-bold text-gray-400">{balanceOfTokenA}</div>
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
                                    <ImageImporter w={20} h={20} src={"/img/icons/usdt.svg"} alt={"symbol"}/>
                                    <span>ETH</span>
                                </label>
                                <FaAngleDown/>
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
                            <div className="w-2/6 p-2 font-bold text-gray-400">{balanceOfTokenB}</div>
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
                                    <ImageImporter w={20} h={20} src={"/img/icons/usdt.svg"} alt={"symbol"}/>
                                    <span>ETH</span>
                                </label>
                                <FaAngleDown/>
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