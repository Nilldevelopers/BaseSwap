// index.ts

import walletReducer from "@/store/reducers/walletReducer";
import contractReducer from "@/store/reducers/contractReducer";

const reducer = {
    wallet: walletReducer,
    contract: contractReducer
};

export default reducer;
