import {usePublicClient, useWalletClient} from "wagmi";
import {pair, swapPairFactory} from "@/lib/ContractFunctions";
import {useEffect, useState} from "react";
import {ILiquidity} from "@/interfaces/ILiquidity";


function useLiquidity(factoryAddress: `0x${string}`): ILiquidity[] {
    const publicClient = usePublicClient();
    const walletClient = useWalletClient();
    const factory = swapPairFactory(publicClient, walletClient.data, factoryAddress);
    const [liquidityDataArray, setLiquidityDataArray] = useState<ILiquidity[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const pairLength = await factory.read.allPairsLength();
                const pairs: `0x${string}`[] = [];
                for (let i = 0; i < Number(pairLength); i++) {
                    const pairAddress = await factory.read.allPairs([BigInt(i)]);
                    pairs.push(pairAddress);
                }

                const liquidityDataPromises = pairs.map(async (pairAddress) => {
                    const liquidityData = await pair(publicClient, walletClient, pairAddress).read.getReserves();
                    const token0Address = await pair(publicClient, walletClient, pairAddress).read.token0();
                    const token1Address = await pair(publicClient, walletClient, pairAddress).read.token1();

                    return {
                        token0: token0Address,
                        token1: token1Address,
                        data: liquidityData,
                    };
                });

                const allLiquidityData = await Promise.all(liquidityDataPromises);
                setLiquidityDataArray(allLiquidityData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [factory, publicClient, walletClient]);

    return liquidityDataArray;
}

export default useLiquidity;
