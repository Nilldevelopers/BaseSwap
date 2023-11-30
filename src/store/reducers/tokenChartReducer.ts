// reducers/tokenReducer.ts
import { SET_TOKEN_DATA } from '../actions/actionTypes';

import {Token} from "@/interfaces/IToken";
import ActionTypes from "@/store/actions/tokenChart";



const initialState: Token = {
    address: `0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee`,
    chainId: 84531,
    decimals: 18,
    extensions: {
        bridgeInfo: {}
    },
    logoURI: "/img/icons/eth.svg",
    name: "Ethereum",
    symbol: "ETH"
};

const tokenReducer = (state: Token = initialState, action: ActionTypes): Token => {
    switch (action.type) {
        case SET_TOKEN_DATA:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default tokenReducer;
