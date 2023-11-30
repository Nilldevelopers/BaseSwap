import { usePublicClient, useWalletClient } from "wagmi";
import { pair, swapPairFactory } from "@/lib/ContractFunctions";
import { useEffect, useState } from "react";
import { ILiquidity } from "@/interfaces/ILiquidity";
import Cookies from 'js-cookie';

function useLiquidity(factoryAddress: `0x${string}`): { data: ILiquidity[]; isLoading: boolean } {
    const publicClient = usePublicClient();
    const walletClient = useWalletClient();
    const factory = swapPairFactory(publicClient, walletClient.data, factoryAddress);
    const [liquidityDataArray, setLiquidityDataArray] = useState<ILiquidity[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Check if liquidityDataArray is stored in cookies
                const liquidityDataFromCookies = Cookies.get('liquidityData');

                if (liquidityDataFromCookies) {
                    // If liquidityDataArray exists in cookies, use it
                    const cachedLiquidityData = JSON.parse(liquidityDataFromCookies) as ILiquidity[];
                    setLiquidityDataArray(cachedLiquidityData);
                    setIsLoading(false); // Set isLoading to false as the data is available from cookies
                } else {
                    // If liquidityDataArray doesn't exist in cookies, fetch and store it
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

                    // Set liquidityDataArray in cookies for future visits
                    Cookies.set('liquidityData', JSON.stringify(allLiquidityData));
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false); // Set isLoading to false regardless of success or error
            }
        };

        fetchData();
    }, [factory, publicClient, walletClient]);

    return { data: liquidityDataArray, isLoading };
}

export default useLiquidity;
