
import Deposit from "@/views/liquidity/components/Deposit";
import Modal from "@/components/extra/Modal";
import {ITokenList} from "@/interfaces/ITokenList";

const LiquidityAddRemoveModal = (props:{
    tokenData:ITokenList
}) => {

    return (
        <>
            <Modal modalName="deposit_modal">
                <Deposit tokenData={props.tokenData}/>
            </Modal>
        </>
    );
};

export default LiquidityAddRemoveModal;