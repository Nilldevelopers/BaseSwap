import {GET_SAMPLE, SAMPLE_ERROR} from "../types";
import {IChoosePool} from "@/interfaces/IChoosePool";

const initialState:IChoosePool = {
    isChoose: false,
    loading: true,
};

const choosePoolReducer = (state:any = initialState, action: any) => {
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

export default choosePoolReducer;