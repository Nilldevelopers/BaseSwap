import {IToken} from "@/interfaces/IToken";
import ImageImporter from "@/plugin/ImageImporter";
import {FaAngleDown} from "react-icons/fa";
import SelectTokenModal from "@/components/extra/SelectTokenModal";

const TokenSection = ({
                          tokenData,
                          modalName,
                          callback
                      }: {
    tokenData: IToken, modalName: string, callback: (data: IToken) => void
}) => {


    return <>
        <div
            className="w-full border-gray-600 bg-custom-cart flex flex-wrap p-2 rounded-xl mt-5">
            <div className="w-full flex flex-row justify-between p-1">
                <div className="flex flex-row items-center">
                    <div className="text-gray-400 p-1 ">
                        Balance:
                    </div>
                    <div className="w-2/6 p-2 font-bold text-gray-400">50.21221</div>
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
                        <label htmlFor={modalName}
                               className="bg-transparent active:bg-gray-700 select-bordered select-sm ms-1 w-20 max-w-xs flex flex-row gap-[10px]">
                            <ImageImporter w={20} h={20} src={"/img/icons/usdt.svg"} alt={"symbol"}/>
                            <span>ETH</span>
                        </label>
                        <FaAngleDown/>
                        <SelectTokenModal
                            tokenName={modalName}
                            fetchSelectToken={(dataToken) => callback(dataToken as IToken)}
                            tokenList={tokenData}
                        />
                    </div>
                    <div>
                        <input defaultValue={20} type="number" placeholder="Type here"
                               className="input w-full max-w-xs bg-transparent"/>
                    </div>
                </div>
            </div>

        </div>
    </>
}

export default TokenSection