import React, {useMemo} from 'react';
import {NextApiRequest, NextApiResponse} from "next";
import Image from "next/image";
import Info from "@/assets/icons/info.svg"
import Usdt from "@/assets/icons/usdt.svg"
import Tether from "@/assets/icons/tether.svg"


const LiquidityTable = ({cols}: { cols: string[] }) => {

    // This is the important bit, we are caching the rendered output for each column
    const renderedColumns = useMemo(() => {
        const renderer = (columnData: string) => {
            // expensive formatting using the column data
            return columnData;
        }

        return cols.map(renderer);
    }, [cols]);

    return (
        <div className="overflow-x-auto border-2 border-slate-600 rounded-[12px] bg-custom-cart">
            <table className="table table-auto min-w-full">
                {/* head */}
                <thead className="border-b-slate-600 border-b-2">
                <tr>
                    {
                        renderedColumns.map((colData, index) => {
                            return <th key={index}
                                       className="capitalize text-sm text-neutral font-['Inter'] font-normal not-italic">{colData}</th>
                        })
                    }
                    <th></th>
                    <th></th>

                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr className='border-none py-5 px-5'>
                    <td>
                        <div className='flex flex-row items-center gap-[7px]'>
                            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                <div className="avatar">
                                    <div className="w-7 h-7">
                                        <Image src={Tether} alt={'tether icon'} width={24} height={24} />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-7 h-7">
                                        <Image src={Usdt} alt={'USDT icon'} width={24} height={24} />
                                    </div>
                                </div>

                            </div>

                            <div className='flex flex-col gap-[4px]'>
                                <span className="uppercase text-sm text-accent font-['Arial'] font-normal not-italic">
                                    USDT
                                    <span className="text-neutral text-['Arial'] leading-[20px] font-normal not-italic">&nbsp;/&nbsp;</span>
                                    ETH
                                </span>
                                <span
                                    className="capitalize text-neutral leading-[12px] text-sm font-['Inter'] font-normal not-italic">Stable Pool</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span className="text-sm text-accent font-['Arial'] font-normal not-italic">5.6%</span>
                    </td>
                    <td>
                        <div className='flex row gap-2 items-center'>
                            <span className="text-sm text-accent font-['Arial'] font-normal not-italic"> $1,324</span>
                            <Image src={Info} alt={'info icon'} width={15} height={15}/>
                        </div>
                    </td>
                    <td>
                        <div className='flex row gap-2 items-center'>
                            <span className="text-sm text-accent font-['Arial'] font-normal not-italic"> $1,324</span>
                            <Image src={Info} alt={'info icon'} width={15} height={15}/>
                        </div>
                    </td>
                    <td>
                        <div className='flex row gap-2 items-center'>
                            <span className="text-sm text-accent font-['Arial'] font-normal not-italic"> $1,324</span>
                            <Image src={Info} alt={'info icon'} width={15} height={15}/>
                        </div>
                    </td>
                    <td>
                        <div className='flex row gap-2 items-center'>
                            <span className="text-sm text-accent font-['Arial'] font-normal not-italic"> $1,324</span>
                            <Image src={Info} alt={'info icon'} width={15} height={15}/>
                        </div>
                    </td>
                    <td>

                        <div className='flex flex-row gap-[7px]'>
                            <button
                                className='btn bg-transparent rounded-[12px] py-[8px] px-[20px] border-neutral border-1 min-h-[2.5rem] h-[2.5rem]'>
                            <span
                                className="capitalize text-sm text-neutral font-['Inter'] font-normal not-italic">Manage</span>
                            </button>
                            <button
                                className="btn bg-transparent border-none py-[8px] px-[20px] border-neutral border-1 min-h-[2.5rem] h-[2.5rem]">
                            <span className="capitalize text-sm text-neutral font-['Inter'] font-normal not-italic">
                                Claim Earnings
                            </span>
                            </button>
                        </div>
                    </td>
                </tr>
                {/* row 2 */}
                <tr className='border-none py-5 px-5'>
                    <td>
                        <div className='flex flex-row items-center gap-[7px]'>
                            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                <div className="avatar">
                                    <div className="w-7 h-7">
                                        <Image src={Tether} alt={'tether icon'} width={24} height={24} />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-7 h-7">
                                        <Image src={Usdt} alt={'USDT icon'} width={24} height={24} />
                                    </div>
                                </div>

                            </div>

                            <div className='flex flex-col gap-[4px]'>
                                <span className="uppercase text-sm text-accent font-['Arial'] font-normal not-italic">
                                    USDT
                                    <span className="text-neutral text-['Arial'] leading-[20px] font-normal not-italic">&nbsp;/&nbsp;</span>
                                    ETH
                                </span>
                                <span
                                    className="capitalize text-neutral leading-[12px] text-sm font-['Inter'] font-normal not-italic">Stable Pool</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span className="text-sm text-accent font-['Arial'] font-normal not-italic">5.6%</span>
                    </td>
                    <td>
                        <div className='flex row gap-2 items-center'>
                            <span className="text-sm text-accent font-['Arial'] font-normal not-italic"> $1,324</span>
                            <Image src={Info} alt={'info icon'} width={15} height={15}/>
                        </div>
                    </td>
                    <td>
                        <div className='flex row gap-2 items-center'>
                            <span className="text-sm text-accent font-['Arial'] font-normal not-italic"> $1,324</span>
                            <Image src={Info} alt={'info icon'} width={15} height={15}/>
                        </div>
                    </td>
                    <td>
                        <div className='flex row gap-2 items-center'>
                            <span className="text-sm text-accent font-['Arial'] font-normal not-italic"> $1,324</span>
                            <Image src={Info} alt={'info icon'} width={15} height={15}/>
                        </div>
                    </td>
                    <td>
                        <div className='flex row gap-2 items-center'>
                            <span className="text-sm text-accent font-['Arial'] font-normal not-italic"> $1,324</span>
                            <Image src={Info} alt={'info icon'} width={15} height={15}/>
                        </div>
                    </td>
                    <td>

                        <div className='flex flex-row gap-[7px]'>
                            <button
                                className='btn bg-transparent rounded-[12px] py-[8px] px-[20px] border-neutral border-1 min-h-[2.5rem] h-[2.5rem]'>
                            <span
                                className="capitalize text-sm text-neutral font-['Inter'] font-normal not-italic">Manage</span>
                            </button>
                            <button
                                className="btn bg-transparent border-none py-[8px] px-[20px] border-neutral border-1 min-h-[2.5rem] h-[2.5rem]">
                            <span className="capitalize text-sm text-neutral font-['Inter'] font-normal not-italic">
                                Claim Earnings
                            </span>
                            </button>
                        </div>
                    </td>

                </tr>
                {/* row 3 */}
                <tr className='border-none py-5 px-5'>
                    <td>
                        <div className='flex flex-row items-center gap-[7px]'>
                            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                <div className="avatar">
                                    <div className="w-7 h-7">
                                        <Image src={Tether} alt={'tether icon'} width={24} height={24} />
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-7 h-7">
                                        <Image src={Usdt} alt={'USDT icon'} width={24} height={24} />
                                    </div>
                                </div>

                            </div>

                            <div className='flex flex-col gap-[4px]'>
                                <span className="uppercase text-sm text-accent font-['Arial'] font-normal not-italic">
                                    USDT
                                    <span className="text-neutral text-['Arial'] leading-[20px] font-normal not-italic">&nbsp;/&nbsp;</span>
                                    ETH
                                </span>
                                <span
                                    className="capitalize text-neutral leading-[12px] text-sm font-['Inter'] font-normal not-italic">Stable Pool</span>
                            </div>
                        </div>
                    </td>
                    <td>
                        <span className="text-sm text-accent font-['Arial'] font-normal not-italic">5.6%</span>
                    </td>
                    <td>
                        <div className='flex row gap-2 items-center'>
                            <span className="text-sm text-accent font-['Arial'] font-normal not-italic"> $1,324</span>
                            <Image src={Info} alt={'info icon'} width={15} height={15}/>
                        </div>
                    </td>
                    <td>
                        <div className='flex row gap-2 items-center'>
                            <span className="text-sm text-accent font-['Arial'] font-normal not-italic"> $1,324</span>
                            <Image src={Info} alt={'info icon'} width={15} height={15}/>
                        </div>
                    </td>
                    <td>
                        <div className='flex row gap-2 items-center'>
                            <span className="text-sm text-accent font-['Arial'] font-normal not-italic"> $1,324</span>
                            <Image src={Info} alt={'info icon'} width={15} height={15}/>
                        </div>
                    </td>
                    <td>
                        <div className='flex row gap-2 items-center'>
                            <span className="text-sm text-accent font-['Arial'] font-normal not-italic"> $1,324</span>
                            <Image src={Info} alt={'info icon'} width={15} height={15}/>
                        </div>
                    </td>
                    <td>

                        <div className='flex flex-row gap-[7px]'>
                            <button
                                className='btn bg-transparent rounded-[12px] py-[8px] px-[20px] border-neutral border-1 min-h-[2.5rem] h-[2.5rem]'>
                            <span
                                className="capitalize text-sm text-neutral font-['Inter'] font-normal not-italic">Manage</span>
                            </button>
                            <button
                                className="btn bg-transparent border-none py-[8px] px-[20px] border-neutral border-1 min-h-[2.5rem] h-[2.5rem]">
                            <span className="capitalize text-sm text-neutral font-['Inter'] font-normal not-italic">
                                Claim Earnings
                            </span>
                            </button>
                        </div>
                    </td>

                </tr>
                </tbody>
            </table>
        </div>
    );
};

export async function getServerSideProps({req, res}: { req: NextApiRequest, res: NextApiResponse }) {
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )

    return {
        props: {},
    }
}

export default LiquidityTable;