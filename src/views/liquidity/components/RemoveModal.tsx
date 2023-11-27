import Modal from "@/components/extra/Modal";
import Withdraw from "@/views/liquidity/components/Withdraw";

const RemoveModal = () => {

    return (
        <>
            <Modal modalName="remove_modal">
                <Withdraw/>
            </Modal>
        </>
    );
};

export default RemoveModal;