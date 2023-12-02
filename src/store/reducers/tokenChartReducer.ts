import {Token} from "@/interfaces/IToken";
import {SET_TOKEN_A_DATA, SET_TOKEN_B_DATA} from "@/store/actions/tokenChartActionTypes";
import ActionTypes from "@/store/actions/tokenChartAction";


// Initial state for 'token'
const initialTokenState: Token = {
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

// Initial state for 'tokenA'
const initialTokenAState: Token = {
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

// Initial state for 'tokenB'
const initialTokenBState: Token = {
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


const tokenAReducer = (state: Token = initialTokenAState, action: ActionTypes): Token => {
    switch (action.type) {
        case SET_TOKEN_A_DATA:
            return {...state, ...action.payload};
        default:
            return state;
    }
};

const tokenBReducer = (state: Token = initialTokenBState, action: ActionTypes): Token => {
    switch (action.type) {
        case SET_TOKEN_B_DATA:
            return {...state, ...action.payload};
        default:
            return state;
    }
};

export {tokenAReducer, tokenBReducer};
