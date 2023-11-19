// contractAction.ts

import {Action} from 'redux';
import {ThunkAction} from 'redux-thunk';

import {useEthersProvider} from '@/hooks/contracts/useEthersProvider';
import {RootState} from "@/store/store";

// Action Types
export const FETCH_BLOCK_NUMBER_REQUEST = 'FETCH_BLOCK_NUMBER_REQUEST';
export const FETCH_BLOCK_NUMBER_SUCCESS = 'FETCH_BLOCK_NUMBER_SUCCESS';
export const FETCH_BLOCK_NUMBER_FAILURE = 'FETCH_BLOCK_NUMBER_FAILURE';

// Action Interfaces
interface FetchBlockNumberRequestAction extends Action<typeof FETCH_BLOCK_NUMBER_REQUEST> {
}

interface FetchBlockNumberSuccessAction extends Action<typeof FETCH_BLOCK_NUMBER_SUCCESS> {
    payload: number; // Assuming blockNumber is a number
}

interface FetchBlockNumberFailureAction extends Action<typeof FETCH_BLOCK_NUMBER_FAILURE> {
    payload: string; // Assuming the error message is a string
}

// Combined Action Type
export type ContractActionTypes =
    | FetchBlockNumberRequestAction
    | FetchBlockNumberSuccessAction
    | FetchBlockNumberFailureAction;

// Action Creators
export const fetchBlockNumberRequest = (): FetchBlockNumberRequestAction => ({
    type: FETCH_BLOCK_NUMBER_REQUEST,
});

export const fetchBlockNumberSuccess = (blockNumber: number): FetchBlockNumberSuccessAction => ({
    type: FETCH_BLOCK_NUMBER_SUCCESS,
    payload: blockNumber,
});

export const fetchBlockNumberFailure = (error: string): FetchBlockNumberFailureAction => ({
    type: FETCH_BLOCK_NUMBER_FAILURE,
    payload: error,
});

// Async Action Creator
export const fetchBlockNumber = (): ThunkAction<void, RootState, null, ContractActionTypes> => {
    return async (dispatch) => {
        dispatch(fetchBlockNumberRequest());

        try {
            const data = useEthersProvider();
            const blockNumber = await data.getBlockNumber();
            dispatch(fetchBlockNumberSuccess(blockNumber));
        } catch (error: any) {
            dispatch(fetchBlockNumberFailure(error.message));
        }
    };
};
