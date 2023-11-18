import Layout from "@/components/layout/Layout";
import React, {useEffect} from "react";
import HomeView from "@/views/home/HomeView";
import {useAppSelector} from "@/hooks/useAppSelector";

import {useAppDispatch} from "@/hooks/useAppDispatch";
import {fetchAccount} from "@/store/reducers/walletReducer";



export default function Home() {
    const dispatch = useAppDispatch()
    const account = useAppSelector((state) => state.walletData.account);

    useEffect(() => {
        // Dispatch the async thunk to fetch account data
        dispatch(fetchAccount());
    }, [dispatch]);


    // useEffect(() => {
    //   const account = getAccount();
    //   alert(account.address +"  =>  "+ account.status);
    // }, [])
    return (
        <Layout title="swap">
            <HomeView/>
            {account}
        </Layout>
    )
}
