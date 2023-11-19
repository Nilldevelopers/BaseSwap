import {wethABI} from "@/config/ABIs/wethABI";
import {useContractWrite} from "wagmi";

const WETHADDRESS = process.env.WETH_CONSTRACT_ADDRESS! as `0x${string}`

function useWETH() {
    const {data, isLoading, isSuccess, write} = useContractWrite({
        address: WETHADDRESS,
        abi: wethABI,
        functionName: 'deposit',
    })

    return {
        data,
        isLoading,
        isSuccess,
        write
    }
}

export default useWETH