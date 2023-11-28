import {Token} from "@/interfaces/IToken";

export const SelectTokenModalButtonHardCodeData: {
    ethereum: Token,
    wethereum: Token,
    base: Token
} = {
    ethereum: {
        address: `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee`,
        chainId: 84531,
        decimals: 18,
        extensions: {
            bridgeInfo: {}
        },
        logoURI: "/img/icons/eth.svg",
        name: "Ethereum",
        symbol: "ETH"
    },
    wethereum: {
        "name": "Wrapped Ether",
        "address": "0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80",
        "symbol": "WETH",
        "decimals": 18,
        "chainId": 84531,
        "logoURI": "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png",
        "extensions": {
            "bridgeInfo": {
                "10": {
                    "tokenAddress": "0x4200000000000000000000000000000000000006"
                },
                "56": {
                    "tokenAddress": "0x2170Ed0880ac9A755fd29B2688956BD959F933F8"
                },
                "137": {
                    "tokenAddress": "0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619"
                },
                "8453": {
                    "tokenAddress": "0x4200000000000000000000000000000000000006"
                },
                "42161": {
                    "tokenAddress": "0x82aF49447D8a07e3bd95BD0d56f35241523fBab1"
                },
                "42220": {
                    "tokenAddress": "0x2DEf4285787d58a2f811AF24755A8150622f4361"
                },
                "43114": {
                    "tokenAddress": "0x49D5c2BdFfac6CE2BFdB6640F4F80f226bc10bAB"
                },
                "84531": {
                    "tokenAddress": "0x4200000000000000000000000000000000000006"
                }
            }
        }
    },
    base: {
        "chainId": 84531,
        "address": "0xB66540499d050fFA30e5a5D275bDA0E1176F1963",
        "name": "BaseSwap",
        "symbol": "BASES",
        "decimals": 18,
        "logoURI": "https://raw.githubusercontent.com/ve33-dex/SwapArchiveData/main/icon/0xB66540499d050fFA30e5a5D275bDA0E1176F1963.png",
        "extensions": {
            "bridgeInfo": {
                "1": {
                    "tokenAddress": "0xBe9895146f7AF43049ca1c1AE358B0541Ea49704"
                }
            }
        }
    }
}