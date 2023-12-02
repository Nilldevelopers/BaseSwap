import {ColorType, createChart} from 'lightweight-charts';
import {memo, useEffect, useRef} from 'react';
import {IChartData} from "@/interfaces/IChartData";
import {useAppSelector} from "@/hooks/useAppSelector";


const ChartComponent = (props: {
    data: IChartData[];
    colors?: {
        backgroundColor?: "transparent" | undefined;
        lineColor?: "#EF233C" | undefined;
        textColor?: "white" | undefined;
        areaTopColor?: "rgba(239,35,60,0.48)" | undefined;
        areaBottomColor?: "rgba(239,35,60,0)" | undefined;
    } | undefined;
}) => {
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
    const tokenData = useAppSelector((state) => state.tokenA);

    function fetchPrice(){
        console.log(tokenData)
    }

    const chartContainerRef = useRef<any>();
    useEffect(
        () => {
            const handleResize = () => {
                chart.applyOptions({width: chartContainerRef.current.clientWidth});
            };

            const chart = createChart(chartContainerRef.current, {
                layout: {
                    background: {type: ColorType.Solid, color: backgroundColor},
                    textColor,
                },
                grid: {
                    vertLines: {color: 'transparent'},
                    horzLines: {color: 'transparent'},
                },
                width: chartContainerRef.current.clientWidth,
                height: window.innerHeight > 500 ? 500 : 300,

            });
            chart.timeScale().fitContent();

            const newSeries = chart.addAreaSeries({lineColor, topColor: areaTopColor, bottomColor: areaBottomColor});
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
            console.log(data[0]?.time);
    }, [])


    return (
        <div
            ref={chartContainerRef}
        />
    );
};


export default memo(ChartComponent)