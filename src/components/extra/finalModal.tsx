
import Modal from "@/components/extra/Modal";
import ImageImporter from "@/plugin/ImageImporter";

function FinalModal() {
    return (
        <Modal className="pt-1 px-7" modalName="final_modal" >
            <div className="w-full p-2 -mt-10 font-bold">
                Add Token0/Token1 liquidity (Volatile)
            </div>
            <div className="w-full rounded border border-stone-500 p-2 flex flex-wrap bg-gray-400 bg-opacity-10">
                <div className="p-2 py-5 w-full border-b border-stone-700  flex justify-between">
                    <strong>Approve Token0</strong>
                    <ImageImporter src={"/img/icons/tick.svg"} w={20} h={20}/>
                </div>
                <div className="p-2 py-5 w-full border-b border-stone-700  flex justify-between">
                    <strong>Approve Token1</strong>
                    <ImageImporter src={"/img/icons/loading.svg"} w={20} h={20}/>
                </div>
                <div className="p-2 py-5 w-full border-b border-stone-700  flex justify-between">
                    <strong>Deposit token in the pool</strong>
                    <ImageImporter src={"/img/icons/faild.svg"} w={20} h={20}/>
                </div>
                <div className="p-2 py-5 w-full border-b border-stone-700  flex justify-between">
                    <strong>Approve Token0/Token1</strong>
                </div>
                <div className="p-2 py-5 w-full border-b border-stone-700  flex justify-between">
                    <strong>Create gauge</strong>
                </div>
                <div className="p-2 py-5 w-full border-b border-stone-700  flex justify-between">
                    <strong>Stake LP token in the gauge</strong>
                </div>
            </div>
        </Modal>
    );
}

export default FinalModal;