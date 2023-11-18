import choosePoolReducer from "@/store/reducers/choosePoolReducer";
import {fetchAccount} from "@/store/reducers/walletReducer";



const reducer = {
    choosePool: choosePoolReducer,
    walletData: fetchAccount
};
export default reducer
