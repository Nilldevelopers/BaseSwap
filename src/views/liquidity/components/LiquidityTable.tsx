import {Fragment, memo} from 'react';
import ImageImporter from "@/plugin/ImageImporter";
import {ILiquidityTable} from "@/interfaces/ILiquidityTable";
import RemoveModal from "@/views/liquidity/components/RemoveModal";


const LiquidityTable = (props: {
    tableData: ILiquidityTable,
}) => {
    return (
        <Fragment>
            <div className="overflow-x-auto border-2 border-slate-600 rounded-[12px] bg-custom-cart">
                <table className="table table-auto min-w-full">
                    <thead className="border-b-slate-600 border-b-2">
                    <tr>
                        {
                            props.tableData.cols.map((colData, index) => {
                                return <th key={index}
                                           className="capitalize text-sm text-neutral font-['Inter'] font-normal not-italic">{colData}</th>
                            })
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {
                        props.tableData.rows.map((data, index) => {
                            return <tr key={index} className='border-none py-5 px-5'>
                                <td>
                                    <div className='flex flex-row items-center gap-[7px]'>
                                        <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                            <div className="avatar">
                                                <div className="w-7 h-7">
                                                    <ImageImporter src='/img/icons/tether.svg' w={24} h={24}/>
                                                </div>
                                            </div>
                                            <div className="avatar">
                                                <div className="w-7 h-7">
                                                    <ImageImporter src={'/img/icons/eth.svg'} w={24} h={24}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='flex flex-col gap-[4px]'>
                                 <span className="uppercase text-sm text-accent font-['Arial'] font-normal not-italic">
                                     USDT
                                     <span
                                         className="text-neutral text-['Arial'] leading-[20px] font-normal not-italic">&nbsp;/&nbsp;</span>
                                     ETH
                                 </span>
                                            <span
                                                className="capitalize text-neutral leading-[12px] text-sm font-['Inter'] font-normal not-italic">Stable Pool</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                             <span
                                                 className="text-sm text-accent font-['Arial'] font-normal not-italic">5.6%</span>
                                </td>
                                <td>
                                    <div className='flex row gap-2 items-center'>
                                     <span
                                         className="text-sm text-accent font-['Arial'] font-normal not-italic"> $1,324</span>

                                    </div>
                                </td>
                                <td>
                                    <div className='flex row gap-2 items-center'>
                                     <span
                                         className="text-sm text-accent font-['Arial'] font-normal not-italic"> $1,324</span>

                                    </div>
                                </td>
                                <td>
                                    <div className='flex row gap-2 items-center'>
                                     <span
                                         className="text-sm text-accent font-['Arial'] font-normal not-italic"> $1,324</span>

                                    </div>
                                </td>
                                <td>
                                    <label htmlFor="remove_modal"
                                           className='btn bg-transparent rounded-[12px] py-[8px] px-[20px] border-neutral border-1 min-h-[2.5rem] h-[2.5rem]'>
                       <span
                           className="capitalize text-sm text-neutral font-['Inter'] font-normal not-italic">Remove</span>
                                    </label>
                                    <RemoveModal/>
                                </td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
};

export default memo(LiquidityTable);