import {ConnectButton} from '@rainbow-me/rainbowkit';
import React, {memo} from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

const ConnectWalletButton = () => {
    return (
        <ConnectButton.Custom>
            {({
                  account,
                  chain,
                  openAccountModal,
                  openChainModal,
                  openConnectModal,
                  authenticationStatus,
                  mounted,
              }) => {
                // Note: If your app doesn't use authentication, you
                // can remove all 'authenticationStatus' checks
                const ready = mounted && authenticationStatus !== 'loading';
                const connected =
                    ready &&
                    account &&
                    chain &&
                    (!authenticationStatus ||
                        authenticationStatus === 'authenticated');
                return (
                    <div
                        {...(!ready && {
                            'aria-hidden': true,
                            'style': {
                                opacity: 0,
                                pointerEvents: 'none',
                                userSelect: 'none',
                            },
                        })}
                    >
                        {(() => {
                            if (!connected) {
                                return (
                                    <button className="btn text-white w-48 bg-custom-red"
                                            onClick={openConnectModal} type="button">
                                            <span >
                                                Connect to Wallet
                                            </span>
                                    </button>
                                );
                            }
                            if (chain.unsupported) {
                                return (
                                    <button className="btn mx-0 text-white w-48 font-bolder"
                                            onClick={openChainModal} type="button">
                                            <span >
                                                Wrong network
                                            </span>
                                    </button>
                                );
                            }
                            return (
                                <div style={{display: 'flex', gap: 12}}>
                                    <button
                                        onClick={openChainModal}
                                        style={{display: 'flex', alignItems: 'center'}}
                                        className="btn mx-0 text-white w-48 font-bolder"
                                        type="button"
                                    >
                                        {chain.hasIcon && (
                                            <div
                                                style={{
                                                    background: chain.iconBackground,
                                                    width: 20,
                                                    height: 20,
                                                    borderRadius: 999,
                                                    overflow: 'hidden',
                                                    marginRight: 4,
                                                }}
                                            >
                                                {chain.iconUrl && (
                                                    <Image
                                                        alt={chain.name ?? 'Chain icon'}
                                                        src={chain.iconUrl}
                                                        width={20}
                                                        height={20}
                                                    />
                                                )}
                                            </div>
                                        )}
                                        <span >
                                        {chain.name}
                                            </span>
                                    </button>
                                    <button onClick={openAccountModal} type="button"
                                            className="btn mx-0 text-white w-48 font-bolder">
                                       <span>
                                        {account.displayName}
                                           {account.displayBalance
                                               ? ` (${account.displayBalance})`
                                               : ''}
                                           </span>
                                    </button>
                                </div>
                            );
                        })()}
                    </div>
                );
            }}
        </ConnectButton.Custom>
    );
};

export default dynamic(Promise.resolve(memo(ConnectWalletButton)), {ssr: false});