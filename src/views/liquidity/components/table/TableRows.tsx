import ImageImporter from "@/plugin/ImageImporter";
import dynamic from "next/dynamic";
import {memo, useState} from "react";
import {ILiquidity} from "@/interfaces/ILiquidity";
import {formatEther} from "viem";
import {IToken} from "@/interfaces/IToken";
import useWallet from "@/hooks/contracts/useWallet";

const RemoveModal = dynamic(() => import("@/views/liquidity/components/modals/RemoveModal"), {
    ssr: false,
    loading: () => <progress className="progress w-56"></progress>,
});

const TableRows = (props: { rows: ILiquidity[], tokenData: IToken, }) => {
    const wallet = useWallet()
    const [selectedRow, setSelectedRow] = useState<ILiquidity>({
        token0: `0x000`,
        token1: `0x000`,
        data: [BigInt(0), BigInt(0), 0]
    })
    return <>
        {
            props.rows.map((data, index) => {
                const token0 = props.tokenData.tokens.find((token) => token.address === data.token0);
                const token1 = props.tokenData.tokens.find((token) => token.address === data.token1);

                return <tr key={index} className='border-none py-5 px-5'>
                    <td>
                        <div className='flex flex-row items-center gap-[7px]'>
                            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                <div className="avatar">
                                    <div className="w-7 h-7">
                                        <ImageImporter src={token0 ? token0.logoURI : '/img/icons/tether.svg'} w={24}
                                                       h={24}/>
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-7 h-7">
                                        <ImageImporter src={token1 ? token1.logoURI : '/img/icons/eth.svg'} w={24}
                                                       h={24}/>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-[4px]'>
                                 <span className="uppercase text-sm text-accent font-['Arial'] font-normal not-italic">
                                    {token0 ? token0.symbol : 'Token0'}
                                     <span
                                         className="text-neutral text-['Arial'] leading-[20px] font-normal not-italic">&nbsp;/&nbsp;</span>
                                     {token1 ? token1.symbol : 'Token1'}
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
                                         className="text-sm text-accent font-['Arial'] font-normal not-italic"> ${formatEther(data.data[0]).slice(0, 6)}4</span>

                        </div>
                    </td>
                    <td>
                        <div className='flex row gap-2 items-center'>
                                     <span
                                         className="text-sm text-accent font-['Arial'] font-normal not-italic"> ${formatEther(data.data[1]).slice(0, 6)}</span>

                        </div>
                    </td>
                    <td>
                        <div className='flex row gap-2 items-center'>
                                     <span
                                         className="text-sm text-accent font-['Arial'] font-normal not-italic"> $1,324</span>

                        </div>
                    </td>
                    <td>
                        {wallet.walletInfo.isConnected ? <label
                                onClick={() => {
                                    setSelectedRow(data)
                                }}
                                htmlFor="remove_modal"
                                className='btn bg-transparent rounded-[12px] py-[8px] px-[20px] border-neutral border-1 min-h-[2.5rem] h-[2.5rem]'>
                       <span
                           className="capitalize text-sm text-neutral font-['Inter'] font-normal not-italic">Remove</span>
                            </label>
                            : <button
                                className="bg-transparent rounded-[12px] py-[8px] px-[20px] border-neutral border-1 min-h-[2.5rem] h-[2.5rem] btn-disabled"
                                tabIndex={-1}
                                role="button" aria-disabled="true">
                            <span
                                className="capitalize text-sm text-neutral font-['Inter'] font-normal not-italic">please connect wallet</span>
                            </button>
                        }

                        <RemoveModal selectedRowData={selectedRow}/>
                    </td>
                </tr>

            })

        }
    </>
};

export default memo(TableRows);