import '@/styles/globals.css'
import type {AppProps} from 'next/app'
import {Provider} from "react-redux";
import {store} from "@/store/store";
import dynamic from "next/dynamic";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
NProgress.configure({easing: "ease", speed: 2000});
NProgress.configure({showSpinner: true});

const PageTransition = dynamic(() => import('@/components/PageTransitionAnimations'), {
    ssr: false
})

export default function App({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <PageTransition>
                <Component {...pageProps} />
            </PageTransition>
        </Provider>
    )

}
