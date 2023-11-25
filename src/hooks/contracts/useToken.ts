import {useEffect} from "react";
import useTokenReadActions, {IReadActions} from "@/hooks/contracts/actions/useTokenReadActions";
import useTokenWriteActions from "@/hooks/contracts/actions/useTokenWriteActions";

interface ITokenProps {
    contractAddress: `0x${string}`;
    walletAddress?: `0x${string}`;
    spenderAddress?: `0x${string}`;
    watch: boolean;
}


function useToken(props: ITokenProps) {
    const {contractAddress, walletAddress, spenderAddress, watch} = props;

    // Read Actions
    const readActions: IReadActions = useTokenReadActions({
        contractAddress: contractAddress,
        walletAddress: walletAddress,
        spenderAddress: spenderAddress,
        watch: watch
    });

    // Write Actions
    const writeActions = useTokenWriteActions(walletAddress || '' as `0x${string}`);

    // useEffect to ensure read hooks are called correctly
    useEffect(() => {
        // Handle errors for read actions
        Object.values(readActions).forEach((action) => {
            if (action.isError) {
                // Handle error here
                console.error("Error in useContractRead:", action.isError);
            }
        });
    }, [readActions]);

    return {
        read: readActions,
        write: writeActions,
    };
}

export default useToken;
