// Define interfaces for the data structure
interface Version {
    major: number;
    minor: number;
    patch: number;
}

interface BridgeInfo {
    [key: number]: {
        tokenAddress: string;
    };
}

export interface Token {    chainId: number;
    address: `0x${string}`;
    name: string;
    symbol: string;
    decimals: number;
    logoURI: string;
    extensions: {
        bridgeInfo: BridgeInfo;
    };
}

export interface IToken {
    name: string;
    timestamp: string;
    version: Version;
    tags: Record<string, never>;
    logoURI: string;
    keywords: string[];
    tokens: Token[];
}