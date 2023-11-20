import React, {useState} from 'react';
import LiquidityTable from "@/views/liquidity/components/LiquidityTable";
import LiquidityAddRemoveModal from "@/views/liquidity/components/LiquidityAddRemoveModal";

const LiquidityView = () => {

    const [showStakedOnly, setShowStakedOnly] = useState<boolean>(false);
    const handleStakedOnlyToggle = () => {
        setShowStakedOnly(prev => !prev);
        if (!showStakedOnly) {
            // setFilteredPools(filterNonZeroBribe(allPools))
        }
        if (showStakedOnly) {
            // setFilteredPools(allPools)
        }
    };

    return (
        <>
            <div className="container mx-auto px-4 mb-28">
                <h1 className="text-accent font-['Inter'] font-bold text-[48px] capitalize leading-[48px] pt-14">liquidity</h1>

                <div className="pt-12 flex flex-row flex-wrap justify-between items-center">
                    <div className="flex flex-row flex-wrap items-center gap-[24px]">
                        <div>
                            <input type="text" placeholder="Search Pair or Token"
                                   className="input input-bordered w-full max-w-xs bg-tab-choose rounded-[18px] h-auto py-[17px] border-none"/>
                        </div>
                        <div>
                            <div className="form-control">
                                <label className="cursor-pointer label">
                                    <input type="checkbox" className="toggle toggle-primary"
                                           onChange={handleStakedOnlyToggle}/>
                                    <span
                                        className="label-text pl-1 capitalize text-sm text-neutral font-['Outfit'] font-medium not-italic">Staked Only</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>

                        <label htmlFor="deposit_modal"
                               className="btn btn-primary rounded-[18px] py-[13px] px-[20px] mt-5 md:mt-0">
                            <span className="capitalize text-sm text-accent font-['Inter'] font-medium not-italic">
                                Deposit liquidity
                            </span>
                        </label>
                        <LiquidityAddRemoveModal/>
                    </div>
                </div>

                <div className='pt-10'>
                    <LiquidityTable rows={[1, 2, 3, 4, 5, 6]}
                                    cols={['Name', 'ARP', 'Total Staked', 'My Staked', 'My Pool', 'Earnings']}/>
                </div>
            </div>
        </>
    );
};


export default LiquidityView;