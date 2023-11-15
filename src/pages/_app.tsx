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


/* RainbowKit Requirements */
import '@rainbow-me/rainbowkit/styles.css';
import {getDefaultWallets, RainbowKitProvider} from '@rainbow-me/rainbowkit';
import {configureChains, createConfig, WagmiConfig} from 'wagmi';
import {arbitrum, base, mainnet, optimism, polygon, zora,} from 'wagmi/chains';
import {alchemyProvider} from 'wagmi/providers/alchemy';
import {publicProvider} from 'wagmi/providers/public';
import {myRainbowCustomTheme} from "@/themes/RainbowKitTheme";


//Binding events.
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
NProgress.configure({easing: "ease", speed: 2000});
NProgress.configure({showSpinner: true});


export default function App({Component, pageProps}: AppProps) {
    const {chains, publicClient} = configureChains(
        [mainnet, polygon, optimism, arbitrum, base, zora],
        [
            alchemyProvider({apiKey: process.env.ALCHEMY_ID!}),
            publicProvider()
        ]
    );

    const {connectors} = getDefaultWallets({
        appName: 've33-dex',
        projectId: 'YOUR_PROJECT_ID',
        chains
    });

    const wagmiConfig = createConfig({
        autoConnect: true,
        connectors,
        publicClient
    })
    return (
        <Provider store={store}>
            <WagmiConfig config={wagmiConfig}>
                <RainbowKitProvider chains={chains} theme={myRainbowCustomTheme}>
                    <Component {...pageProps} />
                </RainbowKitProvider>
            </WagmiConfig>
        </Provider>
    )

}
