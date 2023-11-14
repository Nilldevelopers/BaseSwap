import {ILiquidityBalance} from '@/interfaces/ILiquidityBalance'
import {ILiquidityUser} from "@/interfaces/ILiquidityUser";
export interface ILiquidityData {
    heads: string[],
    data: ILiquidityBalance[]
    liquidityPoolsBalance: ILiquidityUser[]
}