import {Fragment} from 'react';
import dynamic from "next/dynamic";
import {ILiquidity} from "@/interfaces/ILiquidity";
import {IToken} from "@/interfaces/IToken";


const TableRows = dynamic(() => import("@/views/liquidity/components/table/TableRows"), {
    ssr: false,
    loading: () => <progress className="progress w-56"></progress>,
});

const LiquidityTable = (props: {
    cols: string[],
    rows: ILiquidity[],
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
                    <TableRows tokenData={props.tokenData} rows={props.rows}/>
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
};

export default LiquidityTable;