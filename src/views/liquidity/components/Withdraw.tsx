
import ImageImporter from "@/plugin/ImageImporter";
import {ILiquidity} from "@/interfaces/ILiquidity";

const Withdraw = (props:{removedLiquidityData:ILiquidity}) => {
    // console.log(props.removedLiquidityData)
    return (
        <div className="w-full h-[300px]  md:h-auto overflow-y-scroll -mt-7 p-3">
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
                        <ImageImporter src={'/img/icons/eth.svg'} w={24} h={24}/>
                        <span className="px-2">0.01243</span>
                        <span className="text-gray-400">Token0</span>
                    </div>
                    <div>
                        $0.01243
                    </div>
                </div>
                <div className="w-full flex justify-between py-2">
                    <div className="flex items-center">
                        <ImageImporter src={'/img/icons/eth.svg'} w={24} h={24}/>
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
    );
};

export default Withdraw;