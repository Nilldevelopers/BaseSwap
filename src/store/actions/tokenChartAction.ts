// actions.ts

import {SET_TOKEN_A_DATA, SET_TOKEN_B_DATA} from './tokenChartActionTypes';
import {Token} from "@/interfaces/IToken";


// Action creator for setting data for 'tokenA'
export const setTokenAData = (data: Token) => ({
    type: SET_TOKEN_A_DATA,
    payload: data,
});

// Action creator for setting data for 'tokenB'
export const setTokenBData = (data: Token) => ({
    type: SET_TOKEN_B_DATA,
    payload: data,
});

// Define action types for each token
type ActionTypes = ReturnType<typeof setTokenAData> | ReturnType<typeof setTokenBData>;

export default ActionTypes;
