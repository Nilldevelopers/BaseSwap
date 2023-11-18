/* RainbowKit Requirements */
import '@rainbow-me/rainbowkit/styles.css';
import {RainbowKitProvider} from '@rainbow-me/rainbowkit';
import {WagmiConfig} from 'wagmi';
import {myRainbowCustomTheme} from "@/themes/RainbowKitTheme";
import {ReactNode} from "react";
import {chains, wagmiConfig} from "@/config/wagmiconfig";

const WagmiProvider = ({children}: { children: ReactNode }) => {
    return (
        <WagmiConfig config={wagmiConfig}>
            <RainbowKitProvider chains={chains} theme={myRainbowCustomTheme}>
                {children}
            </RainbowKitProvider>
        </WagmiConfig>
    );
};

export default WagmiProvider