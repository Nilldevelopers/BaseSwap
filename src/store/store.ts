import {applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import {configureStore} from '@reduxjs/toolkit'
import reducer from "@/store/reducers";

const middleware = [thunk];
composeWithDevTools(applyMiddleware(...middleware))


export const store = configureStore({reducer})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch