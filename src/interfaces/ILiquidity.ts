export interface ILiquidity {
    token0: `0x${string}`;
    token1: `0x${string}`;
    data: readonly [bigint, bigint, number];
}
