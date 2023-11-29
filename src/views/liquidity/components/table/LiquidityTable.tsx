import {Fragment} from 'react';
import dynamic from "next/dynamic";
import {ILiquidity} from "@/interfaces/ILiquidity";
import {IToken} from "@/interfaces/IToken";


const TableRows = dynamic(() => import("@/views/liquidity/components/table/TableRows"), {
    ssr: false,
    loading: () => <progress className="progress w-56"></progress>,
});

const LoadingSkeleton = () => {
    return <div className="flex flex-col">
        <div className="flex flex-col gap-4 w-52 p-3">
            <div className="flex gap-4 items-center">
                <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                <div className="flex flex-col gap-4">
                    <div className="skeleton h-4 w-20"></div>
                    <div className="skeleton h-4 w-28"></div>
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-4 w-52 p-3">
            <div className="flex gap-4 items-center">
                <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                <div className="flex flex-col gap-4">
                    <div className="skeleton h-4 w-20"></div>
                    <div className="skeleton h-4 w-28"></div>
                </div>
            </div>
        </div>
    </div>
}
const WaitForWalletConnection = () => {
    return <>
        <article className="prose flex flex-row justify-center items-center">
            <span className="loading loading-spinner text-warning"></span>
            <h3 className="mt-0 text-warning text-['Arial'] leading-[20px] font-normal not-italic capitalize ml-0 p-5">please
                connect your wallet</h3>
        </article>
    </>
}
const LiquidityTable = (props: {
    cols: string[],
    rows: { data: ILiquidity[]; isLoading: boolean },
    tokenData: IToken,
}) => {


    return (
        <Fragment>
            <div className="overflow-x-auto border-2 border-slate-600 rounded-[12px] bg-custom-cart">
                <table className="table table-auto min-w-full">
                    <thead className="border-b-slate-600 border-b-2">
                    <tr>
                        {
                            props.cols.map((colData, index) => {
                                return <th key={index}
                                           className="capitalize text-sm text-neutral font-['Inter'] font-normal not-italic">{colData}</th>
                            })
                        }
                    </tr>
                    </thead>
                    <tbody>
                    {props.rows.isLoading ? <LoadingSkeleton/> :
                        <TableRows tokenData={props.tokenData} rows={props.rows.data}/>}
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
};

export default LiquidityTable;