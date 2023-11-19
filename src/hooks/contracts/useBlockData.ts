// useWallet.ts

import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from "@/store/store";
import {fetchBlockNumber} from "@/store/actions/contractAction";

// Custom hook to encapsulate account fetching logic
const useWallet = () => {
    const dispatch = useDispatch();
    const blockNumber = useSelector((state: RootState) => state.contract.blockNumber);
    const loading = useSelector((state: RootState) => state.contract.loading);
    const error = useSelector((state: RootState) => state.contract.error);

    useEffect(() => {
        dispatch(fetchBlockNumber() as any);
    }, [dispatch]);

    return {
        blockNumber,
        loading,
        error,
    };
};

export default useWallet;
