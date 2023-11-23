import  {memo} from 'react';
import ImageImporter from "@/plugin/ImageImporter";
import Modal from "@/components/extra/Modal";
import dynamic from "next/dynamic";

interface IToken {

}

const SelectTokenModal = (props: {
    tokenList: IToken[],
    fetchSelectToken: (data: IToken) => void,
    tokenName: string,
    className?: string
}) => {
    return (
        <Modal className={props.className} modalName={props.tokenName} showSearchBox>
            <div className="grid grid-cols-3 gap-4">
                <button
                    className="btn border-2 border-slate-600 rounded-[12px] bg-custom-cart flex-row items-center justify-center flex-nowrap">
                    <ImageImporter w={20} h={20} src={"/img/icons/usdt.svg"} alt={"symbol"}/>
                    <span
                        className="capitalize text-[17px] text-accent font-['Inter'] font-normal not-italic">Ethereum</span>
                </button>
                <button
                    className="btn border-2 border-slate-600 rounded-[12px] bg-custom-cart flex-row items-center justify-center flex-nowrap">
                    <ImageImporter w={20} h={20} src={"/img/icons/usdt.svg"} alt={"symbol"}/>
                    <span
                        className="capitalize text-[17px] text-accent font-['Inter'] font-normal not-italic">Ethereum</span>
                </button>
                <button
                    className="btn border-2 border-slate-600 rounded-[12px] bg-custom-cart flex-row items-center justify-center flex-nowrap">
                    <ImageImporter w={20} h={20} src={"/img/icons/usdt.svg"} alt={"symbol"}/>
                    <span
                        className="capitalize text-[17px] text-accent font-['Inter'] font-normal not-italic">Ethereum</span>
                </button>
                <button
                    className="btn border-2 border-slate-600 rounded-[12px] bg-custom-cart flex-row items-center justify-center flex-nowrap">
                    <ImageImporter w={20} h={20} src={"/img/icons/usdt.svg"} alt={"symbol"}/>
                    <span
                        className="capitalize text-[17px] text-accent font-['Inter'] font-normal not-italic">Ethereum</span>
                </button>
                <button
                    className="btn border-2 border-slate-600 rounded-[12px] bg-custom-cart flex-row items-center justify-center flex-nowrap">
                    <ImageImporter w={20} h={20} src={"/img/icons/usdt.svg"} alt={"symbol"}/>
                    <span
                        className="capitalize text-[17px] text-accent font-['Inter'] font-normal not-italic">Ethereum</span>
                </button>
                <button
                    className="btn border-2 border-slate-600 rounded-[12px] bg-custom-cart flex-row items-center justify-center flex-nowrap">
                    <ImageImporter w={20} h={20} src={"/img/icons/usdt.svg"} alt={"symbol"}/>
                    <span
                        className="capitalize text-[17px] text-accent font-['Inter'] font-normal not-italic">Ethereum</span>
                </button>
            </div>
            <div className="flex flex-col gap-[16px] overflow-y-auto h-60">

                {
                    props.tokenList.map((data, index) => {
                        return <label key={index} htmlFor={props.tokenName}
                                      onClick={() => props.fetchSelectToken(data)}
                                      className="flex flex-row items-center justify-between px-[16px] py-[5px] border border-2 border-transparent hover:border hover:border-2 hover:border-slate-600 hover:rounded-[12px] hover:duration-50 duration-50 modal-action mt-0">
                            <div className="flex flex-row justify-center items-center gap-[8px]">
                                <div>
                                    <ImageImporter src={'/img/icons/syscoin.svg'} alt={'syscoin icon'}
                                                   h={50}
                                                   w={50}/>
                                </div>
                                <div className="flex flex-col">
                                        <span
                                            className="capitalize text-[16px] text-accent font-['Arial'] font-normal not-italic">Syscoin</span>
                                    <span
                                        className="uppercase text-[12px] text-neutral font-['Arial'] font-normal not-italic">sys</span>
                                </div>
                            </div>
                            <div className="flex flex-col">
                                    <span
                                        className="capitalize text-[16px] text-accent font-['Arial'] font-normal not-italic">200</span>
                                <span
                                    className="uppercase text-[12px] text-neutral font-['Arial'] font-normal not-italic">$3.66</span>
                            </div>
                        </label>

                    })
                }

            </div>
        </Modal>
    );
};

export default dynamic(Promise.resolve(memo(SelectTokenModal)), {ssr: false});