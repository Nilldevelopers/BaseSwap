import {useEffect} from "react";
import useRouterWriteActions from "@/hooks/contracts/actions/useRouterWriteActions";
import useRouterReadActions from "@/hooks/contracts/actions/useRouterReadActions";


function useRouter(args: any[], watch: boolean) {
    // Read Actions
    const readActions = useRouterReadActions(watch);

    // Write Actions
    const writeActions = useRouterWriteActions(args);

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

export default useRouter;
