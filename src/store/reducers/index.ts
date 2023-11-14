import swapSelectTokenReducer from "@/store/reducers/swapSelectTokenReducer";
import choosePoolReducer from "@/store/reducers/choosePoolReducer";
import modalSettingReducer from "@/store/reducers/modalSettingReducer";

const reducer = {
    tokenList: swapSelectTokenReducer,
    choosePool: choosePoolReducer,
    settingModalData: modalSettingReducer
};
export default reducer
