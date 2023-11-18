/* RainbowKit Requirements */
import {alchemyProvider} from 'wagmi/providers/alchemy';
import {publicProvider} from 'wagmi/providers/public';
import '@rainbow-me/rainbowkit/styles.css';
import {getDefaultWallets, RainbowKitProvider} from '@rainbow-me/rainbowkit';
import {Chain, configureChains, createConfig, WagmiConfig} from 'wagmi';
import {baseGoerli} from 'wagmi/chains';
import {myRainbowCustomTheme} from "@/themes/RainbowKitTheme";
import {ReactNode} from "react";

const WagmiProvider = ({children}: { children: ReactNode }) => {

    const {chains, publicClient, webSocketPublicClient} = configureChains(
        [baseGoerli],
      [
        publicProvider()
      ]
    );

    const {connectors} = getDefaultWallets({
        appName: 'BaseSwap',
        projectId: 'e798cef35d6a24a5ddf135ca3b9d57d7',
        chains
    });

    const wagmiConfig = createConfig({
      autoConnect: true,
      connectors,
      publicClient,
      webSocketPublicClient,
    });

    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains} theme={myRainbowCustomTheme}>
                {children}
            </RainbowKitProvider>
        </WagmiConfig>
    );
};

export default WagmiProvider