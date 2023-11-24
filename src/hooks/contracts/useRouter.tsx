import {useEffect} from "react";
import {useContractRead, useContractWrite} from "wagmi";
import {routerABI} from "@/config/ABIs/routerABI";

function useRouter(contractAddress: string = process.env.ROUTER_CONTRACT_ADDRESS | '0xb8C8A49b1dc525Dbde457c0a045b1316Ecd7aD9a'){
    const factory = (args: any[] = [], watch:Boolean = false) => {
        return useContractRead({
            abi: routerABI,
            address: contractAddress,
            functionName: "factory",
            args,
            watch
        })
    }

    const WETH = (args: any[] = [], watch:Boolean = false) => {
        return useContractRead({
            abi: routerABI,
            address: contractAddress,
            functionName: "WETH",
            args,
            watch
        })
    }

    const quote = (args: any[] = [], watch:Boolean = false) => {
        return useContractRead({
            abi: routerABI,
            address: contractAddress,
            functionName: "quote",
            args,
            watch
        })
    }

    const getAmountOut = (args: any[] = [], watch:Boolean = false) => {
        return useContractRead({
            abi: routerABI,
            address: contractAddress,
            functionName: "getAmountOut",
            args,
            watch
        })
    }

    const getAmountIn = (args: any[] = [], watch:Boolean = false) => {
        return useContractRead({
            abi: routerABI,
            address: contractAddress,
            functionName: "getAmountIn",
            args,
            watch
        })
    }

    const getAmountsOut = (args: any[] = [], watch:Boolean = false) => {
        return useContractRead({
            abi: routerABI,
            address: contractAddress,
            functionName: "getAmountsOut",
            args,
            watch
        })
    }

    const getAmountsIn = (args: any[] = [], watch:Boolean = false) => {
        return useContractRead({
            abi: routerABI,
            address: contractAddress,
            functionName: "getAmountsIn",
            args,
            watch
        })
    }

    const addLiquidity = () => {
        return useContractWrite({
            abi: routerABI,
            address: contractAddress,
            functionName: "addLiquidity",
        })
    }

    const addLiquidityETH = () => {
        return useContractWrite({
            abi: routerABI,
            address: contractAddress,
            functionName: "addLiquidityETH",
        })
    }

    const removeLiquidity = () => {
        return useContractWrite({
            abi: routerABI,
            address: contractAddress,
            functionName: "removeLiquidity",
        })
    }

    const removeLiquidityETH = () => {
        return useContractWrite({
            abi: routerABI,
            address: contractAddress,
            functionName: "removeLiquidityETH",
        })
    }

    const removeLiquidityWithPermit = () => {
        return useContractWrite({
            abi: routerABI,
            address: contractAddress,
            functionName: "removeLiquidityWithPermit",
        })
    }

    const removeLiquidityETHWithPermit = () => {
        return useContractWrite({
            abi: routerABI,
            address: contractAddress,
            functionName: "removeLiquidityETHWithPermit",
        })
    }

    const removeLiquidityETHSupportingFeeOnTransferTokens = () => {
        return useContractWrite({
            abi: routerABI,
            address: contractAddress,
            functionName: "removeLiquidityETHSupportingFeeOnTransferTokens",
        })
    }

    const removeLiquidityETHWithPermitSupportingFeeOnTransferTokens = () => {
        return useContractWrite({
            abi: routerABI,
            address: contractAddress,
            functionName: "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens",
        })
    }

    const swapExactTokensForTokens = () => {
        return useContractWrite({
            abi: routerABI,
            address: contractAddress,
            functionName: "swapExactTokensForTokens",
        })
    }

    const swapTokensForExactTokens = () => {
        return useContractWrite({
            abi: routerABI,
            address: contractAddress,
            functionName: "swapTokensForExactTokens",
        })
    }

    const swapExactETHForTokens = () => {
        return useContractWrite({
            abi: routerABI,
            address: contractAddress,
            functionName: "swapExactETHForTokens",
        })
    }

    const swapTokensForExactETH = () => {
        return useContractWrite({
            abi: routerABI,
            address: contractAddress,
            functionName: "swapTokensForExactETH",
        })
    }

    const swapExactTokensForETH = () => {
        return useContractWrite({
            abi: routerABI,
            address: contractAddress,
            functionName: "swapExactTokensForETH",
        })
    }

    const swapETHForExactTokens = () => {
        return useContractWrite({
            abi: routerABI,
            address: contractAddress,
            functionName: "swapETHForExactTokens",
        })
    }

    const swapExactTokensForTokensSupportingFeeOnTransferTokens = () => {
        return useContractWrite({
            abi: routerABI,
            address: contractAddress,
            functionName: "swapExactTokensForTokensSupportingFeeOnTransferTokens",
        })
    }

    const swapExactETHForTokensSupportingFeeOnTransferTokens = () => {
        return useContractWrite({
            abi: routerABI,
            address: contractAddress,
            functionName: "swapExactETHForTokensSupportingFeeOnTransferTokens",
        })
    }

    const swapExactTokensForETHSupportingFeeOnTransferTokens = () => {
        return useContractWrite({
            abi: routerABI,
            address: contractAddress,
            functionName: "swapExactTokensForETHSupportingFeeOnTransferTokens",
        })
    }


    return {
        // READ
        factory,
        WETH,
        quote,
        getAmountOut,
        getAmountIn,
        getAmountsOut,
        // WRITE
        addLiquidity,
        addLiquidityETH,
        removeLiquidity,
        removeLiquidityETH,
        removeLiquidityWithPermit,
        removeLiquidityETHWithPermit,
        removeLiquidityETHSupportingFeeOnTransferTokens,
        removeLiquidityETHWithPermitSupportingFeeOnTransferTokens,
        swapExactTokensForTokens,
        swapTokensForExactTokens,
        swapExactETHForTokens,
        swapTokensForExactETH,
        swapExactTokensForETH,
        swapETHForExactTokens,
        swapExactTokensForTokensSupportingFeeOnTransferTokens,
        swapExactETHForTokensSupportingFeeOnTransferTokens,
        swapExactTokensForETHSupportingFeeOnTransferTokens
    }
}

export default useRouter;