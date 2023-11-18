import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {getAccount} from "@wagmi/core";

interface WalletState {
    account: string | null;
}

const initialState: WalletState = {
    account: null,
};

// Define an async thunk for fetching account data
export const fetchAccount = createAsyncThunk('wallet/fetchAccount', async () => {
    const account = await getAccount();
    return account;
});

const walletSlice = createSlice({
    name: 'wallet',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAccount.fulfilled, (state, action) => {
            // @ts-ignore
            state.account = action.payload;
        });
    },
});

export default walletSlice.reducer;



