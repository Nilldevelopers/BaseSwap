import {GET_SAMPLE, SAMPLE_ERROR} from "../types";
import {ISelectToken} from "@/interfaces/ISelectToken";


const initialState: ISelectToken = {
    selectedToken: {
        firstToken: {
            logoURI: '',
            decimals: 0,
            address: `0x`,
            symbol: '',
            name: '',
            price: 0
        },
        secondToken: {
            logoURI: '',
            decimals: 0,
            address: `0x`,
            symbol: '',
            name: '',
            price: 0
        }
    },
    loading: true,
};

const swapSelectTokenReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case GET_SAMPLE:
            return {
                ...state,
                sample: action.payload,
                loading: false,
            };

        case SAMPLE_ERROR:
            return {
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};

export default swapSelectTokenReducer;