import React, {useState} from 'react';
import ImageImporter from "@/plugin/ImageImporter";
import Deposit from "@/views/liquidity/components/Deposit";
import Withdraw from "@/views/liquidity/components/Withdraw";
import Remove from "@/views/liquidity/components/Remove";

const LiquidityAddRemoveModal = () => {
    const [tabStatus, setTabStatus] = useState<"Deposit" | "Remove" | "Withdraw">("Remove")
    return (
        <>
            <input type="checkbox" id="add_remove_liquidity_modal" className="modal-toggle"/>
            <div className="modal">
                <div className="modal-box border overflow-hidden border-gray-600 py-0 px-0">
                    <div
                        className="font-bold justify-between px-[16px] py-[18px] items-center text-lg w-full flex flex-wrap">
                        <div>
                            <label htmlFor="add_remove_liquidity_modal"
                                   className="btn btn-sm btn-circle btn-ghost right-2 top-2">
                                <ImageImporter src={"/img/icons/arrow-back.svg"} className='mr-[5px]' alt={"arrow-back"}
                                               h={20} w={20}/>
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
                            {tabStatus === "Deposit" && <Deposit/>}
                            {tabStatus === "Remove" && <Remove callbackTabStatus={(data) => setTabStatus(data)}/>}
                            {tabStatus === "Withdraw" && <Withdraw/>}
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default LiquidityAddRemoveModal;