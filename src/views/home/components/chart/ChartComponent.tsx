import {ColorType, createChart} from 'lightweight-charts';
import {memo, useEffect, useRef, useState} from 'react';
import {IChartData} from "@/interfaces/IChartData";
import {pair, swapPairFactory} from "@/lib/ContractFunctions";
import {useAppSelector} from "@/hooks/useAppSelector";
import {usePublicClient, useWalletClient} from "wagmi";
import useWallet from "@/hooks/contracts/useWallet";


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
    const walletData = useWallet()
    const publicClient = usePublicClient();
    const walletClient = useWalletClient();
    const factory = swapPairFactory(publicClient, walletClient.data, '0xDFE9d201CC5865b45024C799Be47D11Db2E326ad');
    const [pairAddress, setPairAddress] = useState<`0x${string}`>('0x0000000000000000000000000000000000000000');
    const tokenA = useAppSelector(state => state.tokenAReducer)
    const tokenB = useAppSelector(state => state.tokenBReducer)
    const [reserveA, setReserveA] = useState<bigint>(BigInt(0));
    const [reserveB, setReserveB] = useState<bigint>(BigInt(0));


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


    useEffect(() => {
        const pairContract = pair(publicClient, walletClient.data, pairAddress);

        async function fetchReserve() {
            const token0 = await pairContract.read.token0();
            const token1 = await pairContract.read.token1();
            const result = await pairContract.read.getReserves();

            const historical_reserves = [];
            let current_blocknumber = walletData.blockNumber;

            for (let i = 0; i < 10; i++) {
                const test = await pairContract.read.getReserves({
                    blockNumber: BigInt(current_blocknumber),
                });

                historical_reserves.push(test);
                current_blocknumber -= 100;
            }
            console.log(current_blocknumber)

            if (tokenA.address === token0) {
                setReserveA(result[0]);
            } else if (tokenA.address === token1) {
                setReserveA(result[1]);
            }

            if (tokenB.address === token0) {
                setReserveB(result[0]);
            } else if (tokenB.address === token1) {
                setReserveB(result[1]);
            }

            if (token0 === '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80') {
                if (tokenA.address === '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80' || tokenA.address === '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
                    setReserveA(result[0]);
                } else if (tokenB.address === '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80' || tokenB.address === '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
                    setReserveB(result[0]);
                }
            } else if (token1 === '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80') {
                if (tokenA.address === '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80' || tokenA.address === '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
                    setReserveA(result[1]);
                } else if (tokenB.address === '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80' || tokenB.address === '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
                    setReserveB(result[1]);
                }
            }

            console.log(result, token0, token1, reserveA, reserveB, tokenA.address === token0, tokenB.address === token1);
        }

        if (pairAddress != '0x0000000000000000000000000000000000000000') {
            fetchReserve();
        } else {
            setReserveB(BigInt(0));
            setReserveA(BigInt(0));
        }
    }, [pairAddress, tokenA, tokenB])

    useEffect(() => {
        async function fetchPairAddress(token0Address: `0x${string}`, token1Address: `0x${string}`) {
            const address = await factory.read.getPair([token0Address, token1Address]);
            console.log(address);
            setPairAddress(address);
        }


    }, [tokenA, tokenB]);

    return (
        <div
            className="md:w-8/12 w-full z-[1] md:h-[500px]  mt-3 rounded-xl bg-custom-cart"
            ref={chartContainerRef}
        />
    );
};


export default memo(ChartComponent)