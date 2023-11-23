import {useEffect} from "react";
import {useContractRead, useContractWrite} from "wagmi";
import {erc20ABI} from "@/config/ABIs/erc20ABI";

interface ITokenProps {
    contractAddress: `0x${string}`;
    walletAddress?: `0x${string}`;
    spenderAddress?: `0x${string}`;
    watch: boolean;
}

interface IReadActions {
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

// External hook for write actions
function useTokenWriteActions(walletAddress: `0x${string}`) {

    return {
        approve: useContractWrite({
            abi: erc20ABI,
            functionName: "approve",
            address: walletAddress,
        }),
        transfer: useContractWrite({
            abi: erc20ABI,
            functionName: "transfer",
            address: walletAddress,
        }),
        transferFrom: useContractWrite({
            abi: erc20ABI,
            functionName: "transferFrom",
            address: walletAddress,
        }),
    };
}

function useToken(props: ITokenProps) {
    const {contractAddress, walletAddress, spenderAddress, watch} = props;

    // Read Actions
    const readActions: IReadActions = useTokenReadActions({
        contractAddress: contractAddress,
        walletAddress: walletAddress,
        spenderAddress: spenderAddress,
        watch: watch
    });

    // Write Actions
    const writeActions = useTokenWriteActions(walletAddress || '' as `0x${string}`);

    // useEffect to ensure read hooks are called correctly
    useEffect(() => {
        // Handle errors for read actions
        Object.values(readActions).forEach((action) => {
            if (action.isError) {
                // Handle error here
                console.error("Error in useContractRead:", action.isError);
            }
        });
    }, [readActions]);

    return {
        read: readActions,
        write: writeActions,
    };
}

export default useToken;
