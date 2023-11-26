import ImageImporter from "@/plugin/ImageImporter";
import {FaAngleDown} from "react-icons/fa";
import SelectTokenModal from "@/components/extra/SelectTokenModal";
import {ITokenList} from "@/interfaces/ITokenList";

const Deposit = (props: { tokenData: ITokenList }) => {
    return (
        <div className="w-full p-2 flex flex-wrap ">
            <div className="w-full h-[300px] md:h-auto overflow-y-scroll px-2 -mt-7">
                <div
                    className="w-full border-gray-600 bg-custom-cart flex flex-wrap p-2 rounded-xl ">
                    <div className="w-full text-gray-400 p-1 ">
                        Amount
                    </div>
                    <div className="w-full flex p-1">
                        <div className="w-2/6 p-2 font-bold text-xl">50</div>
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
                            className="w-1/6 p-2 hover:[text-shadow:_0px_5px_8px_#EF233C] flex items-center text-gray-400">MAX%
                        </button>
                    </div>
                    <div className="w-full mt-5">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row justify-between items-center">
                                <label htmlFor="select_first_token_modal"
                                       className="bg-transparent active:bg-gray-700 select-bordered select-sm ms-1 w-20 max-w-xs flex flex-row gap-[10px]">
                                    <ImageImporter w={20} h={20} src={"/img/icons/usdt.svg"} alt={"symbol"}/>
                                    <span>ETH</span>
                                </label>
                                <FaAngleDown/>
                                <SelectTokenModal
                                    tokenName="select_first_token_modal"
                                    fetchSelectToken={(dataToken) => console.log(dataToken)}
                                    tokenList={props.tokenData}
                                />
                            </div>
                            <div>
                                <input type="text" placeholder="Type here" className="input w-full max-w-xs"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="w-full border-gray-600 bg-custom-cart flex flex-wrap p-2 rounded-xl mt-5">
                    <div className="w-full text-gray-400 p-1 ">
                        Amount
                    </div>
                    <div className="w-full flex p-1">
                        <div className="w-2/6 p-2 font-bold text-xl">50</div>
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
                            className="w-1/6 p-2 hover:[text-shadow:_0px_5px_8px_#EF233C] flex items-center text-gray-400">MAX%
                        </button>
                    </div>
                    <div className="w-full mt-5">
                        <div className="flex flex-row justify-between">
                            <div className="flex flex-row justify-between items-center">
                                <label htmlFor="select_second_token_modal"
                                       className="bg-transparent active:bg-gray-700 select-bordered select-sm ms-1 w-20 max-w-xs flex flex-row gap-[10px]">
                                    <ImageImporter w={20} h={20} src={"/img/icons/usdt.svg"} alt={"symbol"}/>
                                    <span>ETH</span>
                                </label>
                                <FaAngleDown/>
                                <SelectTokenModal
                                    tokenName="select_second_token_modal"
                                    fetchSelectToken={(dataToken) => console.log(dataToken)}
                                    tokenList={props.tokenData}
                                />
                            </div>
                            <div>
                                <input type="text" placeholder="Type here" className="input w-full max-w-xs"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full p-2 flex flex-wrap mt-5'>

                    <div className="flex flex-col w-full py-1">
                        <div className="divider divider-primary">Reserve Info</div>
                    </div>
                    <div className="w-full flex justify-between">
                        <span className="px-2">0.026</span>
                        <span className="px-2">56.26490</span>
                        <span className="px-2">0.1 %</span>
                    </div>
                    <div className="w-full flex justify-between">
                        <span className="px-2">opBNB</span>
                        <span className="px-2">ECHO2</span>
                        <span className="px-2">Slippage</span>
                    </div>
                </div>
                <div className="w-full flex flex-wrap mt-5">
                    <div className="flex flex-col w-full">
                        <div className="divider divider-primary">Your Balance</div>
                    </div>
                    <div className="w-full flex justify-between">
                        <span>0.1-2</span>
                        <span>0</span>
                    </div>
                    <div className="w-full flex justify-between">
                        <span className="text-gray-400">Pooled Token0-Token1</span>
                        <span className="text-gray-400">Staked Token0-Token1</span>
                    </div>
                </div>
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