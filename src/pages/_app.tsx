import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import {store} from "@/store/store";
import Router from "next/router";

/* Nprogress Requirements */
import NProgress from "nprogress";
import "nprogress/nprogress.css";


/* Lazysize Requirements */
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';


import WagmiProvider from "@/providers/WagmiProvider";
import { Analytics } from '@vercel/analytics/react';


//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
NProgress.configure({easing: "ease", speed: 2000});
NProgress.configure({showSpinner: true});


export default function App({Component, pageProps}: AppProps) {

    return (
        <WagmiProvider>
            <Provider store={store}>
                <Component {...pageProps} />
                <Analytics/>
            </Provider>
        </WagmiProvider>
    )

}
