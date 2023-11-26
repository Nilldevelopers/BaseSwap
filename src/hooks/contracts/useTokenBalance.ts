import {useEffect, useState} from 'react';
import {usePublicClient} from "wagmi";
import {useEthersSigner} from "@/hooks/contracts/useEthersSigner";
import {erc20} from "@/lib/ContractFunctions";

const useTokenBalance = (tokenAddress: `0x${string}`): bigint => {
    const [tokenBalanceOf, setTokenBalanceOf] = useState<bigint>(BigInt(0))
    const publicClient = usePublicClient();
    const walletClient = useEthersSigner();
    const token1 = erc20(publicClient, walletClient, tokenAddress);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await token1.read.balanceOf([walletClient!.address as `0x${string}`]);
                setTokenBalanceOf(result);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [walletClient]);

    return tokenBalanceOf
};

export default useTokenBalance;