import {routerABI} from "@/config/ABIs/routerABI";
import {wethABI} from "@/config/ABIs/wethABI";
import {pairABI} from "@/config/ABIs/pairABI";
import {pairFactoryABI} from "@/config/ABIs/pairFactoryABI";
import {erc20ABI} from "@/config/ABIs/erc20ABI";

import {getContract} from "viem";

const routerContractAddress = process.env.ROUTER_CONTRACT_ADDRESS;
const factoryContractAddress = process.env.FACTORY_CONTRACT_ADDRESS;
const wethContractAddress = process.env.WETH_CONTRACT_ADDRESS;


function swapRouter(publicClient, contractAddress: `0x${string}` = routerContractAddress) {
    return getContract({
        address: contractAddress,
        abi: routerABI,
        publicClient: publicClient,
    })
}

function swapPairFactory(publicClient, contractAddress: `0x${string}` = factoryContractAddress) {
    return getContract({
        address: contractAddress,
        abi: pairFactoryABI,
        publicClient: publicClient,
    })
}

function weth(publicClient, contractAddress: `0x${string}` = wethContractAddress) {
    return getContract({
        address: contractAddress,
        abi: wethABI,
        publicClient: publicClient,
    })
}

function pair(publicClient, contractAddress: `0x${string}`) {
    return getContract({
        address: contractAddress,
        abi: pairABI,
        publicClient: publicClient,
    })
}

function erc20(publicClient, contractAddress: `0x${string}`) {
    return getContract({
        address: contractAddress,
        abi: erc20ABI,
        publicClient: publicClient,
    })
}

export default {swapRouter, swapPairFactory, weth, pair, erc20}
