import Modal from "@/components/extra/Modal";
import Withdraw from "@/views/liquidity/components/Withdraw";
import {ILiquidity} from "@/interfaces/ILiquidity";

const RemoveModal = (props: { selectedRowData: ILiquidity }) => {

    return (
        <>
            <Modal modalName="remove_modal">
                <Withdraw removedLiquidityData={props.selectedRowData}/>
            </Modal>
        </>
    );
};

export default RemoveModal;