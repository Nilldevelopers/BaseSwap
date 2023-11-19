// useWETH.ts
import {wethABI} from "@/config/ABIs/wethABI";
import {ContractWriteOptions, useContractRead, useContractWrite} from "wagmi";

const WETHADDRESS = process.env.WETH_CONSTRACT_ADDRESS! as `0x${string}`;

type DepositFunction = 'deposit' | 'deposit0' | 'deposit1' | 'deposit2';

function useWETH(functionName: DepositFunction, value?: string, args?: any[], watch?: boolean = false): ContractWriteOptions {
    const writeData = useContractWrite({
        address: WETHADDRESS,
        abi: wethABI,
        functionName,
        args,
        value,
    });
    const readData = useContractRead({
        address: WETHADDRESS,
        abi: wethABI,
        functionName,
        args,
        watch
    });

    return {
        writeData,
        readData,
    };
}


export default useWETH;
