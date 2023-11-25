import {useContractRead} from "wagmi";
import {erc20ABI} from "@/config/ABIs/erc20ABI";

export interface IReadActions {
    symbol: { data?: any; isError?: boolean };
    name: { data?: any; isError?: boolean };
    decimals: { data?: any; isError?: boolean };
    totalSupply: { data?: any; isError?: boolean };
    balanceOf: { data?: any; isError?: boolean };
    allowance: { data?: any; isError?: boolean };
}


// External hook for read actions
function useTokenReadActions({contractAddress, walletAddress, spenderAddress, watch}: {
    contractAddress: `0x${string}`,
    walletAddress?: `0x${string}`,
    spenderAddress?: `0x${string}`,
    watch: boolean
}): IReadActions {
    return {
        symbol: useContractRead({
            abi: erc20ABI,
            functionName: "symbol",
            address: contractAddress,
        }),
        name: useContractRead({
            abi: erc20ABI,
            functionName: "name",
            address: contractAddress,
        }),
        decimals: useContractRead({
            abi: erc20ABI,
            functionName: "decimals",
            address: contractAddress,
        }),
        totalSupply: useContractRead({
            abi: erc20ABI,
            functionName: "totalSupply",
            address: contractAddress,
        }),
        balanceOf: useContractRead({
            abi: erc20ABI,
            functionName: "balanceOf",
            address: contractAddress,
            args: [walletAddress || '' as `0x${string}`],
            watch,
        }),
        allowance: useContractRead({
            abi: erc20ABI,
            functionName: "allowance",
            address: contractAddress,
            args: [walletAddress || '' as `0x${string}`, spenderAddress || '' as `0x${string}`],
            watch,
        }),
    };
}
export default useTokenReadActions