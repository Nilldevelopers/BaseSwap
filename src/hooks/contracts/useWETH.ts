import {wethABI} from "@/config/ABIs/wethABI";
import {useContractWrite} from "wagmi";

const WETHADDRESS = process.env.WETH_CONSTRACT_ADDRESS! as `0x${string}`

function useWETH() {
    const {data, isLoading, isSuccess, write} = useContractWrite({
        address: WETHADDRESS,
        abi: wethABI,
        functionName: 'deposit',
    })
    const {data, isLoading, isSuccess, write} = useContractWrite({
        address: WETHADDRESS,
        abi: wethABI,
        functionName: 'deposit0',
    })
    const {data, isLoading, isSuccess, write} = useContractWrite({
        address: WETHADDRESS,
        abi: wethABI,
        functionName: 'deposit1',
    })
    const {data, isLoading, isSuccess, write} = useContractWrite({
        address: WETHADDRESS,
        abi: wethABI,
        functionName: 'deposit2',
    })
    return {
        data,
        isLoading,
        isSuccess,
        write
    }
}

export default useWETH