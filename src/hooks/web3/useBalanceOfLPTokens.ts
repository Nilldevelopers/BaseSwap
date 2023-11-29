import {usePublicClient, useWalletClient} from "wagmi";
import {useEffect, useState} from "react";
import {erc20, swapPairFactory} from "@/lib/ContractFunctions";
import useWallet from "@/hooks/contracts/useWallet";


function useBalanceOfLPTokens() {
    const publicClient = usePublicClient();
    const walletClient = useWalletClient();
    const [tokenBalanceOf, setTokenBalanceOf] = useState<number[]>([])
    const wallet = useWallet()
    useEffect(() => {
        const fetchData = async () => {
            try {
                const factory = await swapPairFactory(publicClient, walletClient.data, "0xDFE9d201CC5865b45024C799Be47D11Db2E326ad")
                const pairLength = await factory.read.allPairsLength();
                const LPTokenBalanceOfList: number[] = [];
                for (let i = 0; i < Number(pairLength); i++) {
                    const pairAddress = await factory.read.allPairs([BigInt(i)]);
                    const LPToken = erc20(publicClient, walletClient.data, pairAddress)
                    const LPTokenBalanceOf = await LPToken.read.balanceOf([wallet.walletInfo.address!])
                    LPTokenBalanceOfList.push(Number(LPTokenBalanceOf))
                }

                setTokenBalanceOf(LPTokenBalanceOfList)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
        fetchData();
    }, [publicClient, walletClient]);

    return tokenBalanceOf
}

export default useBalanceOfLPTokens