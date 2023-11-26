
import Deposit from "@/views/liquidity/components/Deposit";
import Modal from "@/components/extra/Modal";
import {ITokenList} from "@/interfaces/ITokenList";
import Withdraw from "@/views/liquidity/components/Withdraw";
import Remove from "@/views/liquidity/components/Remove";

const LiquidityAddRemoveModal = (props:{
    tokenData:ITokenList
}) => {

    return (
        <>
            <Modal modalName="deposit_modal">
                {/*<Deposit tokenData={props.tokenData}/>*/}
                <Withdraw/>
                {/*<Remove />*/}
            </Modal>
        </>
    );
};

export default LiquidityAddRemoveModal;