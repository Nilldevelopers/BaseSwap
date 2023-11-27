
import Deposit from "@/views/liquidity/components/deposit/Deposit";
import Modal from "@/components/extra/Modal";
import {IToken} from "@/interfaces/IToken";
import Withdraw from "@/views/liquidity/components/Withdraw";
import Remove from "@/views/liquidity/components/Remove";

const DepositModal = (props:{
    tokenData:IToken
}) => {

    return (
        <>
            <Modal modalName="deposit_modal">
                <Deposit tokenData={props.tokenData}/>
                {/*<Withdraw/>*/}
                {/*<Remove />*/}
            </Modal>
        </>
    );
};

export default DepositModal;