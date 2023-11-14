import {GET_SAMPLE, SAMPLE_ERROR} from "../types";
import {ISettingModal} from "@/interfaces/ISettingModal";

export const userSettingModalData = (payload: ISettingModal) => async (dispatch: (arg0: { type: string; payload: any }) => any) => {
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