
import Modal from "@/components/extra/Modal";
import ImageImporter from "@/plugin/ImageImporter";
import Link from "next/link";

function Successfully() {
    return (
        <Modal className="pt-1 bg-gradient-to-b from-[#84d98761] bg-opacity-90" modalName="Successfully_modal">
            <div className="w-full flex flex-wrap justify-center content-center">
                <ImageImporter src={"/img/icons/success.svg"} w={200} h={200}/>
                <div className="w-full font-bold pt-10 text-center">
                    Progress Done Successfully
                </div>
                <div className="w-full flex text-gray-400 pt-3 pb-5 font-bold justify-center text-center">
                    Transaction has been confirmed by the
                    <br/>
                    blockchain
                </div>
                <Link className="font-bold underline" href={""}>View on Block Explorer</Link>
            </div>

        </Modal>
    );
}

export default Successfully;