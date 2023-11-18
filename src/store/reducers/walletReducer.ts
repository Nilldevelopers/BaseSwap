// walletReducer.ts

import {
    FETCH_ACCOUNT_REQUEST,
    FETCH_ACCOUNT_SUCCESS,
    FETCH_ACCOUNT_FAILURE,
    WalletActionTypes,
} from '@/store/actions/walletAction';
import { useAppSelector } from '@/hooks/useAppSelector'; // Adjust the path accordingly

// Interface for the state
interface WalletState {
    account: any; // Replace 'any' with the actual type of your account object
    loading: boolean;
    error: string | null;
}

// Initial state
const initialState: WalletState = {
    account: {},
    loading: false,
    error: null,
};

// Reducer function
const walletReducer = (state = initialState, action: WalletActionTypes): WalletState => {

    switch (action.type) {
        case FETCH_ACCOUNT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_ACCOUNT_SUCCESS:
            return {
                ...state,
                loading: false,
                account: action.payload,
            };
        case FETCH_ACCOUNT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default walletReducer;
