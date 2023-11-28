import {Fragment, memo, useMemo} from 'react';
import {ILiquidityTable} from "@/interfaces/ILiquidityTable";
import dynamic from "next/dynamic";


const TableRows = dynamic(() => import("@/views/liquidity/components/table/TableRows"),{
    ssr: false,
    loading: () => <progress className="progress w-56"></progress>,
});

const LiquidityTable = (props: {
    tableData: ILiquidityTable,
}) => {

    const memoizedRow = useMemo(() => {
        return <TableRows rows={props.tableData.rows} cols={props.tableData.cols}/>;
    }, [props.tableData]);

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
                    {memoizedRow}
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
};

export default LiquidityTable;