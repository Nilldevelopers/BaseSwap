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

interface Token {
    chainId: number;
    address: string;
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