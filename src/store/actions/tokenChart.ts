// actions.ts
import { SET_TOKEN_DATA } from './actionTypes';
import {Token} from "@/interfaces/IToken";



export const setTokenData = (data: Token) => ({
    type: SET_TOKEN_DATA,
    payload: data,
});

type ActionTypes = ReturnType<typeof setTokenData>;

export default ActionTypes;
