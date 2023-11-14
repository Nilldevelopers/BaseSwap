import {GET_SAMPLE, SAMPLE_ERROR} from "../types";
import {IChoosePool} from "@/interfaces/IChoosePool";

export const userChooseData = (payload: IChoosePool) => async (dispatch: (arg0: { type: string; payload: any }) => any) => {
    try {
        dispatch({
            type: GET_SAMPLE,
            payload: payload.isChoose,
        });
    } catch (error) {
        dispatch({
            type: SAMPLE_ERROR,
            payload: "error message",
        });
    }
};