import {ConnectButton} from '@rainbow-me/rainbowkit';
import  {memo} from "react";
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
                                    <button className="btn text-white w-32 bg-custom-red border-transparent"
                                            onClick={openConnectModal} type="button">
                                            <span>
                                                Connect
                                            </span>
                                    </button>
                                );
                            }
                            if (chain.unsupported) {
                                return (
                                    <button className="btn mx-0 text-white w-48 font-bolder border-transparent"
                                            onClick={openChainModal} type="button">
                                            <span>
                                                Wrong network
                                            </span>
                                    </button>
                                );
                            }
                            return (
                                <div style={{display: 'flex', gap: 12}}>
                                    <button
                                        onClick={openChainModal}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            backgroundColor: 'rgba(96, 122, 227, 0.15)',
                                            borderRadius: '12px'
                                        }}
                                        className="btn mx-0 text-white w-fit font-bolder border-transparent"
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
                                                    marginLeft: '7px'
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
                                        <span>
                                        {/*{chain.name}*/}
                                            </span>
                                    </button>
                                    <button onClick={openAccountModal} type="button"
                                            className="btn bg-transparent border-transparent mx-0 text-white w-48 font-bolder"
                                            style={{
                                                borderRadius: "12px",
                                                border: "1px solid #D90429"
                                            }}
                                    >
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