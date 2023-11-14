import {GET_SAMPLE, SAMPLE_ERROR} from "../types";
import {ISelectToken} from "@/interfaces/ISelectToken";

export const userChooseToken = (payload: ISelectToken) => async (dispatch: (arg0: { type: string; payload: any }) => any) => {
    try {
        dispatch({
            type: GET_SAMPLE,
            payload: payload,
        });
    } catch (error) {
        dispatch({
            type: SAMPLE_ERROR,
            payload: "error message",
        });
    }
};