import React, {useMemo} from 'react';
import {NextApiRequest, NextApiResponse} from "next";


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
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    {
                        renderedColumns.map((colData, index) => {
                            return <th key={index}>{colData}</th>
                        })
                    }

                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                </tr>
                {/* row 2 */}
                <tr>
                    <th>2</th>
                    <td>Hart Hagerty</td>
                    <td>Desktop Support Technician</td>
                    <td>Purple</td>
                </tr>
                {/* row 3 */}
                <tr>
                    <th>3</th>
                    <td>Brice Swyre</td>
                    <td>Tax Accountant</td>
                    <td>Red</td>
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