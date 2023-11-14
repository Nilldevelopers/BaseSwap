import {GET_SAMPLE, SAMPLE_ERROR} from "../types";
import {ISettingModal} from "@/interfaces/ISettingModal";

const initialState: ISettingModal = {
    transactionSpeed: '0',
    tolerance: 0,
    transactionDeadline: ''
};

const modalSettingReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case GET_SAMPLE:
            return {
                ...state,
                isChoose: action.payload,
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

export default modalSettingReducer;