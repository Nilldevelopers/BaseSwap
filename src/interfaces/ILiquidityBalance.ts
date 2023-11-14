interface ITest {
    title?: any,
    detail?: any,
    apr?: any,
    total_stake?: any,
    my_stake?: any,
    my_pool?: any,
    earnings?: any
}

export interface ILiquidityBalance extends ITest {
    pair_address: `0x${string}`;
    account_lp_balance: bigint;
    account_gauge_balance: bigint;
    account_gauge_earned: bigint;
    account_token0_balance: bigint;
    account_token1_balance: bigint;
    symbol: string;
    gauge: `0x${string}`;
    gauge_total_supply: bigint
    emissions: bigint;
    claimable0: bigint;
    claimable1: bigint;
    token0: `0x${string}`;
    token1: `0x${string}`;
    token0_symbol: string;
    token1_symbol: string;
    stable: boolean;
}