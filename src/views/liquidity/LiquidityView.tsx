import {useCallback, useState} from 'react';
import dynamic from 'next/dynamic';
import {ILiquidityTable} from '@/interfaces/ILiquidityTable';
import {IToken} from '@/interfaces/IToken';
import useLiquidity from "@/hooks/web3/useLiquidity";


const LiquidityAddRemoveModal = dynamic(() => import('@/views/liquidity/components/modals/DepositModal'));
const Successfully = dynamic(() => import('@/components/notification/Successfully'));
const Failed = dynamic(() => import('@/components/notification/Failed'));
const FinalModal = dynamic(() => import('@/components/extra/finalModal'));
const LiquidityTable = dynamic(() => import("@/views/liquidity/components/table/LiquidityTable"));

const LiquidityView = (props: {
    tableData: ILiquidityTable,
    tokenData: IToken,
    factoryAddress: `0x${string}`
}) => {
    const [showStakedOnly, setShowStakedOnly] = useState<boolean>(false);
    const handleStakedOnlyToggle = useCallback(() => {
        setShowStakedOnly(prev => !prev);
        if (!showStakedOnly) {
            // setFilteredPools(filterNonZeroBribe(allPools))
        }
        if (showStakedOnly) {
            // setFilteredPools(allPools)
        }
    }, [showStakedOnly]);


    /* fetch pairs */
    const liquidities = useLiquidity(props.factoryAddress)


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
                        {/*<label htmlFor="final_modal">final</label>*/}
                        {/*<FinalModal/>*/}
                        {/*/*/}
                        {/*<label htmlFor="Successfully_modal">Successfully_modal</label>*/}
                        {/*<Successfully/>*/}
                        {/*/*/}
                        {/*<label htmlFor="failed_modal">failed_modal</label>*/}
                        {/*<Failed/>*/}
                        {/*/*/}

                        <label htmlFor="deposit_modal"
                               className="btn btn-primary rounded-[18px] py-[13px] px-[20px] mt-5 md:mt-0">
                            <span className="capitalize text-sm text-accent font-['Inter'] font-medium not-italic">
                                Deposit liquidity
                            </span>
                        </label>
                        <LiquidityAddRemoveModal tokenData={props.tokenData}/>
                    </div>
                </div>

                <div className='pt-10'>
                    <section className="w-full overflow-x-scroll">
                        <LiquidityTable tokenData={props.tokenData} cols={props.tableData.cols} rows={liquidities}/>
                    </section>
                </div>
            </div>
        </>
    );
};


export default LiquidityView;