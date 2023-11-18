/* RainbowKit Requirements */
import {alchemyProvider} from 'wagmi/providers/alchemy';
import {publicProvider} from 'wagmi/providers/public';
import '@rainbow-me/rainbowkit/styles.css';
import {getDefaultWallets, RainbowKitProvider} from '@rainbow-me/rainbowkit';
import {configureChains, createConfig, WagmiConfig} from 'wagmi';
import {arbitrum, base, baseGoerli, mainnet, optimism, polygon, zora,} from 'wagmi/chains';
import {myRainbowCustomTheme} from "@/themes/RainbowKitTheme";
import {ReactNode} from "react";
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc';

const WagmiProvider = ({children}: { children: ReactNode }) => {
    const {chains, publicClient} = configureChains(
        [mainnet, polygon, optimism, arbitrum, base, zora,baseGoerli],
        [
            // alchemyProvider({apiKey: process.env.ALCHEMY_ID!}),
            // publicProvider(),
            jsonRpcProvider({
                rpc: () => ({
                    http: 'https://goerli.base.org',
                }),
            }),
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
        publicClient,
    })
    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains} theme={myRainbowCustomTheme}>
                {children}
            </RainbowKitProvider>
        </WagmiConfig>
    );
};

export default WagmiProvider