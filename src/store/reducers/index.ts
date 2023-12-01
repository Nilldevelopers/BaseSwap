// index.ts


import {tokenAReducer, tokenBReducer} from "@/store/reducers/tokenChartReducer";
import {combineReducers} from "redux";

const reducer = combineReducers({
    tokenA: tokenAReducer,
    tokenB: tokenBReducer,
});

export default reducer;
