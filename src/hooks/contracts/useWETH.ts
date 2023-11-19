// useWETH.ts
import {wethABI} from "@/config/ABIs/wethABI";
import {ContractWriteOptions, useContractWrite} from "wagmi";

const WETHADDRESS = process.env.WETH_CONSTRACT_ADDRESS! as `0x${string}`;

type DepositFunction = 'deposit' | 'deposit0' | 'deposit1' | 'deposit2';

function useWETH(functionName: DepositFunction): ContractWriteOptions {
    const {data, isLoading, isSuccess, write} = useContractWrite({
        address: WETHADDRESS,
        abi: wethABI,
        functionName: functionName,
    });

    return {
        data,
        isLoading,
        isSuccess,
        write,
    };
}

export default useWETH;
