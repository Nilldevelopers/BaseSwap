import {useContractRead} from "wagmi";
import {routerABI} from "@/config/ABIs/routerABI";

const ROUTER_ADDRESS = process.env.ROUTER_CONTRACT_ADDRESS

function useRouterReadActions(watch: boolean = false) {
    return {
        factory: useContractRead({
            abi: routerABI,
            functionName: "factory",
            address: ROUTER_ADDRESS as `0x${string}`,
            watch
        }),
        WETH: useContractRead({
            abi: routerABI,
            functionName: "WETH",
            address: ROUTER_ADDRESS as `0x${string}`,
            watch,
        }),
        quote: useContractRead({
            abi: routerABI,
            functionName: "quote",
            address: ROUTER_ADDRESS as `0x${string}`,
            watch,
        }),
        getAmountOut: useContractRead({
            abi: routerABI,
            functionName: "getAmountOut",
            address: ROUTER_ADDRESS as `0x${string}`,
            watch,
        }),
        getAmountIn: useContractRead({
            abi: routerABI,
            functionName: "getAmountIn",
            address: ROUTER_ADDRESS as `0x${string}`,
            watch,
        }),

        getAmountsOut: useContractRead({
            abi: routerABI,
            functionName: "getAmountsOut",
            address: ROUTER_ADDRESS as `0x${string}`,
            watch,
        }),
        getAmountsIn: useContractRead({
            abi: routerABI,
            functionName: "getAmountsIn",
            address: ROUTER_ADDRESS as `0x${string}`,
            watch,
        }),
    }
}

export default useRouterReadActions