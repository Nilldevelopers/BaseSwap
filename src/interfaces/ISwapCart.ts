import {GetAccountResult} from "@wagmi/core";
import {IToken} from "@/interfaces/IToken";

export interface ISwapCart {
    contractAddress: string,
    walletInfo: GetAccountResult,
    tokenData: IToken
}