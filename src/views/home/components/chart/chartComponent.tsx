
import { createChart, ColorType } from 'lightweight-charts';
import React, { useEffect, useRef } from 'react';


export const ChartComponent = (props: { data: any; colors?: { backgroundColor?: "transparent" | undefined; lineColor?: "#EF233C" | undefined; textColor?: "white" | undefined; areaTopColor?: "rgba(239,35,60,0.48)" | undefined; areaBottomColor?: "rgba(239,35,60,0)" | undefined; } | undefined; }) => {
    const {
        data,
        colors: {
            backgroundColor = 'transparent',
            lineColor = '#EF233C',
            textColor = 'white',
            areaTopColor = 'rgba(239,35,60,0.48)',
            areaBottomColor = 'rgba(239,35,60,0)',
        } = {},
    } = props;

    const chartContainerRef = useRef<any>();
    useEffect(
        () => {
            const handleResize = () => {
                chart.applyOptions({ width: chartContainerRef.current.clientWidth });
            };

            const chart = createChart(chartContainerRef.current, {
                layout: {
                    background: { type: ColorType.Solid, color: backgroundColor },
                    textColor,
                },
                grid: {
                    vertLines: { color: 'transparent' },
                    horzLines: { color: 'transparent' },
                },
                width: chartContainerRef.current.clientWidth ,
                height: window.innerHeight > 500 ? 500  :  300  ,

            });
            chart.timeScale().fitContent();

            const newSeries = chart.addAreaSeries({ lineColor, topColor: areaTopColor, bottomColor: areaBottomColor });
            newSeries.setData(data);

            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);

                chart.remove();
            };
        },
        [data, backgroundColor, lineColor, textColor, areaTopColor, areaBottomColor]
    );
    useEffect(() => {
    } , [])

    return (
        <div
            ref={chartContainerRef}
        />
    );
};

const initialData = [
    { time: '2018-12-22', value: 32.51 },
    { time: '2018-12-23', value: 31.11 },
    { time: '2018-12-24', value: 27.02 },
    { time: '2018-12-25', value: 27.32 },
    { time: '2018-12-26', value: 25.17 },
    { time: '2018-12-27', value: 28.89 },
    { time: '2018-12-28', value: 25.46 },
    { time: '2018-12-29', value: 23.92 },
    { time: '2018-12-30', value: 22.68 },
    { time: '2018-12-31', value: 22.67 },
];

export function TVChartContainer() {
    return (

            <ChartComponent data={initialData}></ChartComponent>

    );
}