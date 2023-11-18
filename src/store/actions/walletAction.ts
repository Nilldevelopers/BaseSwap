// walletAction.ts

import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';


import { getAccount } from '@wagmi/core';
import {RootState} from "@/store/store";

// Action Types
export const FETCH_ACCOUNT_REQUEST = 'FETCH_ACCOUNT_REQUEST';
export const FETCH_ACCOUNT_SUCCESS = 'FETCH_ACCOUNT_SUCCESS';
export const FETCH_ACCOUNT_FAILURE = 'FETCH_ACCOUNT_FAILURE';

// Action Interfaces
interface FetchAccountRequestAction extends Action<typeof FETCH_ACCOUNT_REQUEST> {}
interface FetchAccountSuccessAction extends Action<typeof FETCH_ACCOUNT_SUCCESS> {
    payload: any; // Replace 'any' with the actual type of your account object
}
interface FetchAccountFailureAction extends Action<typeof FETCH_ACCOUNT_FAILURE> {
    payload: string; // Assuming the error message is a string
}

// Combined Action Type
export type WalletActionTypes =
    | FetchAccountRequestAction
    | FetchAccountSuccessAction
    | FetchAccountFailureAction;

// Action Creators
export const fetchAccountRequest = (): FetchAccountRequestAction => ({
    type: FETCH_ACCOUNT_REQUEST,
});

export const fetchAccountSuccess = (account: any): FetchAccountSuccessAction => ({
    type: FETCH_ACCOUNT_SUCCESS,
    payload: account,
});

export const fetchAccountFailure = (error: string): FetchAccountFailureAction => ({
    type: FETCH_ACCOUNT_FAILURE,
    payload: error,
});

// Async Action Creator
export const fetchAccount = (): ThunkAction<void, RootState, null, WalletActionTypes> => {
    return async (dispatch) => {
        dispatch(fetchAccountRequest());
        try {
            const account = getAccount(); // Assuming getAccount() is a function to fetch the account
            dispatch(fetchAccountSuccess(account));
        } catch (error) {
            // @ts-ignore
            dispatch(fetchAccountFailure(error.message));
        }
    };
};
