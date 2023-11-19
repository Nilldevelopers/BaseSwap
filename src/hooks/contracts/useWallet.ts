// useWallet.ts

import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from "@/store/store";
import {fetchAccount} from "@/store/actions/walletAction";

// Custom hook to encapsulate account fetching logic
const useWallet = () => {
    const dispatch = useDispatch();
    const account = useSelector((state: RootState) => state.wallet.account);
    const loading = useSelector((state: RootState) => state.wallet.loading);
    const error = useSelector((state: RootState) => state.wallet.error);

    useEffect(() => {
        dispatch(fetchAccount() as any);
    }, [dispatch]);

    return {
        account,
        loading,
        error,
    };
};

export default useWallet;
