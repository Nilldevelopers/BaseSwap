// contractReducer.ts

import {
    FETCH_BLOCK_NUMBER_REQUEST,
    FETCH_BLOCK_NUMBER_SUCCESS,
    FETCH_BLOCK_NUMBER_FAILURE,
    ContractActionTypes,
} from '@/store/actions/contractAction';

// Interface for the state
interface ContractState {
    blockNumber: number | null;
    loading: boolean;
    error: string | null;
}

// Initial state
const initialState: ContractState = {
    blockNumber: null,
    loading: false,
    error: null,
};

// Reducer function
const contractReducer = (state = initialState, action: ContractActionTypes): ContractState => {
    switch (action.type) {
        case FETCH_BLOCK_NUMBER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_BLOCK_NUMBER_SUCCESS:
            return {
                ...state,
                loading: false,
                blockNumber: action.payload,
            };
        case FETCH_BLOCK_NUMBER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default contractReducer;
