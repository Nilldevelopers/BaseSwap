import React, {useEffect} from "react";
import Layout from "@/components/layout/Layout";
import HomeView from "@/views/home/HomeView";
import {useAppSelector} from "@/hooks/useAppSelector";
import {fetchAccount} from "@/store/actions/walletAction";
import {useAppDispatch} from "@/hooks/useAppDispatch";


export default function Home(): React.JSX.Element {
    const dispatch = useAppDispatch()
    const account = useAppSelector((state) => state.wallet.account);
    const loading = useAppSelector((state) => state.wallet.loading);
    const error = useAppSelector((state) => state.wallet.error);
    useEffect(() => {
        dispatch(fetchAccount() as any);
    }, [dispatch]);

    return (
        <Layout title="swap">
            <HomeView account={account} loading={loading} error={error}/>
        </Layout>
    )
}
