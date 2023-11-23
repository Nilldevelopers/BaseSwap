
import Modal from "@/components/extra/Modal";
import ImageImporter from "@/plugin/ImageImporter";
import Link from "next/link";

function Failed() {
    return (
        <Modal className="pt-1 bg-gradient-to-b from-[#d9545461] bg-opacity-90" modalName="failed_modal">
            <div className="w-full flex flex-wrap justify-center content-center">
                <ImageImporter src={"/img/icons/failed.svg"} w={200} h={200}/>
                <div className="w-full font-bold pt-10 text-center">
                    Progress Done Unsuccessfully
                </div>
                <div className="w-full flex text-gray-400 pt-3 pb-5 font-bold justify-center text-center">
                    Transaction has not been confirmed by the
                    <br/>
                    blockchain
                </div>
                <Link className="font-bold underline" href={""}>View on Block Explorer</Link>
            </div>

        </Modal>
    );
}

export default Failed;