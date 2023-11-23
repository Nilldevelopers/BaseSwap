import {useContractRead, useContractWrite} from "wagmi";
import {erc20ABI} from "@/config/ABIs/erc20ABI";

interface IERC20 {
    contractAddress: `0x${string}`,
    walletAddress?: `0x${string}`,
    spenderAddress?: `0x${string}`,
    watch: boolean,

}


function useERC20(props: IERC20) {
    /* Read Actions */
    const symbol = useContractRead({
        abi: erc20ABI,
        functionName: 'symbol',
        address: props.contractAddress,
    })
    const name = useContractRead({
        abi: erc20ABI,
        functionName: 'name',
        address: props.contractAddress,
    })
    const decimals = useContractRead({
        abi: erc20ABI,
        functionName: 'decimals',
        address: props.contractAddress,
    })
    const totalSupply = useContractRead({
        abi: erc20ABI,
        functionName: 'totalSupply',
        address: props.contractAddress,
    })
    const balanceOf = useContractRead({
        abi: erc20ABI,
        functionName: 'balanceOf',
        address: props.contractAddress,
        args: [props.walletAddress!],
        watch: props.watch
    })
    const allowance = useContractRead({
        abi: erc20ABI,
        functionName: 'allowance',
        address: props.contractAddress,
        args: [props.walletAddress!, props.spenderAddress!],
        watch: props.watch
    })


    /* Write Actions */
    const approve = useContractWrite({
        abi: erc20ABI,
        functionName: 'approve',
        address: props.walletAddress,
    })
    const transfer = useContractWrite({
        abi: erc20ABI,
        functionName: 'transfer',
        address: props.walletAddress,
    })
    const transferFrom = useContractWrite({
        abi: erc20ABI,
        functionName: 'transferFrom',
        address: props.walletAddress,
    })


    return {
        read: {
            symbol,
            name,
            decimals,
            totalSupply,
            balanceOf,
            allowance
        },
        write: {
            approve,
            transfer,
            transferFrom
        }
    }
}

export default useERC20