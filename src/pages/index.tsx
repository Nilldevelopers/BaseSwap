import Layout from "@/components/layout/Layout";
import React, {useEffect} from "react";
import HomeView from "@/views/home/HomeView";
import {getAccount} from "@wagmi/core";

export default function Home() {
    useEffect(() => {
      const account = getAccount();
      alert(account.address +"  =>  "+ account.status);
    }, [])
    return (
        <Layout title="swap">
            <HomeView/>
        </Layout>
    )
}
