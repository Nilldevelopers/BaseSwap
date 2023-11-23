import {ILiquidityTable} from "@/interfaces/ILiquidityTable";
import dynamic from "next/dynamic";
import TableLoading from "@/views/liquidity/components/table/TableLoading";


const TableRow = dynamic(() => import('@/views/liquidity/components/table/TableRow'), {
    loading: () => <TableLoading/>,
    ssr: false, // Disable server-side rendering
});
const LiquidityTable = ({cols, rows}: ILiquidityTable) => {
    return (
        <div className="overflow-x-auto border-2 border-slate-600 rounded-[12px] bg-custom-cart">
            <table className="table table-auto min-w-full">
                <thead className="border-b-slate-600 border-b-2">
                <tr>
                    {
                        cols.map((colData, index) => {
                            return <th key={index}
                                       className="capitalize text-sm text-neutral font-['Inter'] font-normal not-italic">{colData}</th>
                        })
                    }
                    <th>&nbsp;</th>
                    <th>&nbsp;</th>

                </tr>
                </thead>
                <TableRow rows={rows}/>
            </table>
        </div>
    );
};


export default LiquidityTable;