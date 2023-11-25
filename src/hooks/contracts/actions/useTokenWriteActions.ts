import {useContractWrite} from "wagmi";
import {erc20ABI} from "@/config/ABIs/erc20ABI";

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

export default useTokenWriteActions