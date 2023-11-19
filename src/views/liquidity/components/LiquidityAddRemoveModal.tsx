import React from 'react';
import Deposit from "@/views/liquidity/components/Deposit";
import Modal from "@/components/extra/Modal";

const LiquidityAddRemoveModal = () => {

    return (
        <>
            <Modal modalName="deposit_modal">
                <Deposit/>
            </Modal>
        </>
    );
};

export default LiquidityAddRemoveModal;