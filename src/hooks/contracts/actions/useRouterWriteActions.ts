import {useContractWrite} from "wagmi";
import {routerABI} from "@/config/ABIs/routerABI";

const ROUTER_ADDRESS = process.env.ROUTER_CONTRACT_ADDRESS

function useRouterWriteActions(args: any) {
    return {
        addLiquidity: useContractWrite({
            abi: routerABI,
            functionName: "addLiquidity",
            address: ROUTER_ADDRESS as `0x${string}`,
            args,
        }),
        addLiquidityETH: useContractWrite({
            abi: routerABI,
            functionName: "addLiquidityETH",
            address: ROUTER_ADDRESS as `0x${string}`,
            args,

        }),
        removeLiquidity: useContractWrite({
            abi: routerABI,
            functionName: "removeLiquidity",
            address: ROUTER_ADDRESS as `0x${string}`,
            args,

        }),
        removeLiquidityETH: useContractWrite({
            abi: routerABI,
            functionName: "removeLiquidityETH",
            address: ROUTER_ADDRESS as `0x${string}`,
            args,

        }),
        removeLiquidityWithPermit: useContractWrite({
            abi: routerABI,
            functionName: "removeLiquidityWithPermit",
            address: ROUTER_ADDRESS as `0x${string}`,
            args,

        }),
        removeLiquidityETHWithPermit: useContractWrite({
            abi: routerABI,
            functionName: "removeLiquidityETHWithPermit",
            address: ROUTER_ADDRESS as `0x${string}`,
            args,

        }),
        removeLiquidityETHSupportingFeeOnTransferTokens: useContractWrite({
            abi: routerABI,
            functionName: "removeLiquidityETHSupportingFeeOnTransferTokens",
            address: ROUTER_ADDRESS as `0x${string}`,
            args,

        }),
        removeLiquidityETHWithPermitSupportingFeeOnTransferTokens: useContractWrite({
            abi: routerABI,
            functionName: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
            address: ROUTER_ADDRESS as `0x${string}`,
            args,

        }),
        swapExactTokensForTokens: useContractWrite({
            abi: routerABI,
            functionName: "swapExactTokensForTokens",
            address: ROUTER_ADDRESS as `0x${string}`,
            args,

        }),
        swapTokensForExactTokens: useContractWrite({
            abi: routerABI,
            functionName: "swapTokensForExactTokens",
            address: ROUTER_ADDRESS as `0x${string}`,
            args,

        }),
        swapExactETHForTokens: useContractWrite({
            abi: routerABI,
            functionName: "swapExactETHForTokens",
            address: ROUTER_ADDRESS as `0x${string}`,
            args,

        }),
        swapTokensForExactETH: useContractWrite({
            abi: routerABI,
            functionName: "swapTokensForExactETH",
            address: ROUTER_ADDRESS as `0x${string}`,
            args,

        }),
        swapExactTokensForETH: useContractWrite({
            abi: routerABI,
            functionName: "swapExactTokensForETH",
            address: ROUTER_ADDRESS as `0x${string}`,
            args,

        }),
        swapETHForExactTokens: useContractWrite({
            abi: routerABI,
            functionName: "swapETHForExactTokens",
            address: ROUTER_ADDRESS as `0x${string}`,
            args,

        }),
        swapExactTokensForTokensSupportingFeeOnTransferTokens: useContractWrite({
            abi: routerABI,
            functionName: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
            address: ROUTER_ADDRESS as `0x${string}`,
            args,

        }),
        swapExactETHForTokensSupportingFeeOnTransferTokens: useContractWrite({
            abi: routerABI,
            functionName: "swapExactETHForTokensSupportingFeeOnTransferTokens",
            address: ROUTER_ADDRESS as `0x${string}`,
            args,

        }),
        swapExactTokensForETHSupportingFeeOnTransferTokens: useContractWrite({
            abi: routerABI,
            functionName: "swapExactTokensForETHSupportingFeeOnTransferTokens",
            address: ROUTER_ADDRESS as `0x${string}`,
            args,

        }),
    }
}

export default useRouterWriteActions