import {IToken} from "@/interfaces/IToken";
import Modal from "@/components/extra/Modal";
import Deposit from "@/views/liquidity/components/deposit/Deposit";


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