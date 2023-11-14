import {ITokenItems} from "@/interfaces/ITokenItems";

export interface ISelectToken {
    selectedToken: { firstToken: ITokenItems, secondToken: ITokenItems },
    loading: boolean
}