import React, {useState} from 'react';
import ImageImporter from "@/plugin/ImageImporter";

const LiquidityAddRemoveModal = () => {
    const [tabStatus, setTabStatus] = useState<"Deposit" | "Remove" | "Withdraw">("Remove")
    return (
        <>
            <input type="checkbox" id="add_remove_liquidity_modal" className="modal-toggle"/>
            <div className="modal">
                <div className="modal-box border overflow-hidden border-gray-600 py-0 px-0">
                    <div className="font-bold justify-between px-[16px] py-[18px] items-center text-lg w-full flex flex-wrap">
                        <div>
                            <label htmlFor="add_remove_liquidity_modal"
                                   className="btn btn-sm btn-circle btn-ghost right-2 top-2">
                                <ImageImporter src={"/img/icons/arrow-back.svg"} className='mr-[5px]' alt={"arrow-back"} h={20} w={20}/>
                            </label>
                            Manage Liquidity
                        </div>
                        <ImageImporter src={"/img/icons/setting.svg"} alt={"setting-icon"} h={20} w={20}/>
                    </div>
                    <div className="py-4">
                        <div className="w-full p-2 px-0 flex flex-wrap">
                            <div className="w-full border-b-2 border-gray-700">
                                <button
                                    onClick={() => setTabStatus("Deposit")}
                                    className={`w-1/2 p-2 active:bg-gray-900 duration-200 border-b-2  ${tabStatus === "Deposit" ? "border-red-500" : "border-transparent"}`}>Deposit
                                </button>
                                <button
                                    onClick={() => setTabStatus("Remove")}
                                    className={`w-1/2 p-2 active:bg-gray-900 duration-200 border-b-2  ${tabStatus === "Remove" ? "border-red-500" : "border-transparent"}`}>Remove
                                </button>
                            </div>
                            {
                                tabStatus === "Deposit" && (
                                    <div className="w-full p-2 flex flex-wrap ">
                                        Deposit
                                    </div>
                                )
                            }

                            {
                                tabStatus === "Remove" && (
                                    <div className="w-full p-3 flex flex-wrap h-[350px] overflow-y-scroll">

                                        {
                                            [1, 2, 3, 4, 5].map((item, index) => (
                                                <div key={index}
                                                     className="w-full flex flex-wrap rounded-[4px] border border-gray-600 my-1 px-[16px] py-[18px] items-center justify-between">
                                                    <div className="flex items-center justify-center w-full md:w-auto">
                                                        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                                            <div className="avatar">
                                                                <div className="w-7 h-7">
                                                                    <ImageImporter src='/img/icons/tether.svg' w={24}
                                                                                   h={24}/>
                                                                </div>
                                                            </div>
                                                            <div className="avatar">
                                                                <div className="w-7 h-7">
                                                                    <ImageImporter src={'/img/icons/usdt.svg'} w={24}
                                                                                   h={24}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="font-bold px-2 text-xl">
                                                            Token0/Token1
                                                        </div>
                                                    </div>
                                                    <button onClick={() => setTabStatus("Withdraw")}
                                                            className="text-gray-400 underline w-full md:w-auto">
                                                        Withdraw
                                                    </button>
                                                </div>
                                            ))
                                        }

                                    </div>
                                )
                            }
                            {
                                tabStatus === "Withdraw" && (
                                    <div className="w-full h-[300px] md:h-[380px] overflow-y-scroll p-3">
                                        <div
                                            className="w-full border-gray-600 bg-custom-cart flex flex-wrap p-2 rounded-xl ">
                                            <div className="w-full text-gray-400 p-1 ">
                                                Amount
                                            </div>
                                            <div className="w-full flex p-1">
                                                <div className="w-2/6 p-2 font-bold text-xl">50%</div>
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
                                            <div className="w-full mt-5 flex flex-wrap">
                                                <div
                                                    className="w-full bg-custom-cart rounded-xl flex flex-wrap justify-between  p-2 ">
                                                    <input type="range" min={0} max="100"
                                                           className="range range-sm range-error rounded-md"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='w-full p-2 flex flex-wrap mt-5'>
                                            <div className="w-full py-1 ">
                                                You will receive at least
                                            </div>
                                            <div className="w-full flex justify-between py-2">
                                                <div className="flex items-center">
                                                    <ImageImporter src={'/img/icons/usdt.svg'} w={24} h={24}/>
                                                    <span className="px-2">0.01243</span>
                                                    <span className="text-gray-400">Token0</span>
                                                </div>
                                                <div>
                                                    $0.01243
                                                </div>
                                            </div>
                                            <div className="w-full flex justify-between py-2">
                                                <div className="flex items-center">
                                                    <ImageImporter src={'/img/icons/usdt.svg'} w={24} h={24}/>
                                                    <span className="px-2">0.01243</span>
                                                    <span className="text-gray-400">Token1</span>
                                                </div>
                                                <div>
                                                    $0.01243
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full flex flex-wrap p-2">
                                            <div className="w-full">Your Balance</div>
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
                                                Remove Liquidity
                                            </button>
                                        </div>
                                    </div>
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default LiquidityAddRemoveModal;