import React from 'react';
import ImageImporter from "@/plugin/ImageImporter";

const SelectTokenModal = () => {
    return (
        <>
            <input type="checkbox" id="first_token_modal" className="modal-toggle"/>
            <div className="modal">
                <div className="modal-box">
                    <div className="flex flex-col gap-[26px]">
                        <div className="flex flex-row items-center justify-between">
                            <input type="text" placeholder="Search by name,symbol or address"
                                   className="input w-full max-w-xs bg-swap-selection-input rounded-[12px]"/>
                            <div className="modal-action mt-0">
                                <label htmlFor="first_token_modal"
                                       className="btn btn-sm btn-circle btn-ghost">✕</label>
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">

                            <button
                                className="btn border-2 border-slate-600 rounded-[12px] bg-custom-cart flex flex-row items-center justify-center">
                                <ImageImporter w={20} h={20} src={"/img/icons/usdt.svg"} alt={"symbol"}/>
                                <span
                                    className="capitalize text-[17px] text-accent font-['Inter'] font-normal not-italic">Ethereum</span>
                            </button>
                            <button
                                className="btn border-2 border-slate-600 rounded-[12px] bg-custom-cart flex flex-row items-center justify-center">
                                <ImageImporter w={20} h={20} src={"/img/icons/usdt.svg"} alt={"symbol"}/>
                                <span
                                    className="capitalize text-[17px] text-accent font-['Inter'] font-normal not-italic">Ethereum</span>
                            </button>
                            <button
                                className="btn border-2 border-slate-600 rounded-[12px] bg-custom-cart flex flex-row items-center justify-center">
                                <ImageImporter w={20} h={20} src={"/img/icons/usdt.svg"} alt={"symbol"}/>
                                <span
                                    className="capitalize text-[17px] text-accent font-['Inter'] font-normal not-italic">Ethereum</span>
                            </button>
                            <button
                                className="btn border-2 border-slate-600 rounded-[12px] bg-custom-cart flex flex-row items-center justify-center">
                                <ImageImporter w={20} h={20} src={"/img/icons/usdt.svg"} alt={"symbol"}/>
                                <span
                                    className="capitalize text-[17px] text-accent font-['Inter'] font-normal not-italic">Ethereum</span>
                            </button>
                            <button
                                className="btn border-2 border-slate-600 rounded-[12px] bg-custom-cart flex flex-row items-center justify-center">
                                <ImageImporter w={20} h={20} src={"/img/icons/usdt.svg"} alt={"symbol"}/>
                                <span
                                    className="capitalize text-[17px] text-accent font-['Inter'] font-normal not-italic">Ethereum</span>
                            </button>
                            <button
                                className="btn border-2 border-slate-600 rounded-[12px] bg-custom-cart flex flex-row items-center justify-center">
                                <ImageImporter w={20} h={20} src={"/img/icons/usdt.svg"} alt={"symbol"}/>
                                <span
                                    className="capitalize text-[17px] text-accent font-['Inter'] font-normal not-italic">Ethereum</span>
                            </button>
                        </div>
                        <div className="flex flex-col gap-[16px]">
                            <div
                                className="flex flex-row items-center justify-between px-[16px] py-[5px] border border-2 border-transparent hover:border hover:border-2 hover:border-slate-600 hover:rounded-[12px] hover:duration-50 duration-50">
                                <div className="flex flex-row justify-center items-center gap-[8px]">
                                    <div>
                                        <ImageImporter src={'/img/icons/syscoin.svg'} alt={'syscoin icon'} h={50} w={50}/>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="capitalize text-[16px] text-accent font-['Arial'] font-normal not-italic">Syscoin</span>
                                        <span className="uppercase text-[12px] text-neutral font-['Arial'] font-normal not-italic">sys</span>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="capitalize text-[16px] text-accent font-['Arial'] font-normal not-italic">200</span>
                                    <span className="uppercase text-[12px] text-neutral font-['Arial'] font-normal not-italic">$3.66</span>
                                </div>
                            </div>

                            <div
                                className="flex flex-row items-center justify-between px-[16px] py-[5px] border border-2 border-transparent hover:border hover:border-2 hover:border-slate-600 hover:rounded-[12px] hover:duration-50 duration-50">
                                <div className="flex flex-row justify-center items-center gap-[8px]">
                                    <div>
                                        <ImageImporter src={'/img/icons/syscoin.svg'} alt={'syscoin icon'} h={50} w={50}/>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="capitalize text-[16px] text-accent font-['Arial'] font-normal not-italic">Syscoin</span>
                                        <span className="uppercase text-[12px] text-neutral font-['Arial'] font-normal not-italic">sys</span>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="capitalize text-[16px] text-accent font-['Arial'] font-normal not-italic">200</span>
                                    <span className="uppercase text-[12px] text-neutral font-['Arial'] font-normal not-italic">$3.66</span>
                                </div>
                            </div>
                            <div
                                className="flex flex-row items-center justify-between px-[16px] py-[5px] border border-2 border-transparent hover:border hover:border-2 hover:border-slate-600 hover:rounded-[12px] hover:duration-50 duration-50">
                                <div className="flex flex-row justify-center items-center gap-[8px]">
                                    <div>
                                        <ImageImporter src={'/img/icons/syscoin.svg'} alt={'syscoin icon'} h={50} w={50}/>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="capitalize text-[16px] text-accent font-['Arial'] font-normal not-italic">Syscoin</span>
                                        <span className="uppercase text-[12px] text-neutral font-['Arial'] font-normal not-italic">sys</span>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="capitalize text-[16px] text-accent font-['Arial'] font-normal not-italic">200</span>
                                    <span className="uppercase text-[12px] text-neutral font-['Arial'] font-normal not-italic">$3.66</span>
                                </div>
                            </div>
                            <div
                                className="flex flex-row items-center justify-between px-[16px] py-[5px] border border-2 border-transparent hover:border hover:border-2 hover:border-slate-600 hover:rounded-[12px] hover:duration-50 duration-50">
                                <div className="flex flex-row justify-center items-center gap-[8px]">
                                    <div>
                                        <ImageImporter src={'/img/icons/syscoin.svg'} alt={'syscoin icon'} h={50} w={50}/>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="capitalize text-[16px] text-accent font-['Arial'] font-normal not-italic">Syscoin</span>
                                        <span className="uppercase text-[12px] text-neutral font-['Arial'] font-normal not-italic">sys</span>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="capitalize text-[16px] text-accent font-['Arial'] font-normal not-italic">200</span>
                                    <span className="uppercase text-[12px] text-neutral font-['Arial'] font-normal not-italic">$3.66</span>
                                </div>
                            </div>
                            <div
                                className="flex flex-row items-center justify-between px-[16px] py-[5px] border border-2 border-transparent hover:border hover:border-2 hover:border-slate-600 hover:rounded-[12px] hover:duration-50 duration-50">
                                <div className="flex flex-row justify-center items-center gap-[8px]">
                                    <div>
                                        <ImageImporter src={'/img/icons/syscoin.svg'} alt={'syscoin icon'} h={50} w={50}/>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="capitalize text-[16px] text-accent font-['Arial'] font-normal not-italic">Syscoin</span>
                                        <span className="uppercase text-[12px] text-neutral font-['Arial'] font-normal not-italic">sys</span>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="capitalize text-[16px] text-accent font-['Arial'] font-normal not-italic">200</span>
                                    <span className="uppercase text-[12px] text-neutral font-['Arial'] font-normal not-italic">$3.66</span>
                                </div>
                            </div>
                            <div
                                className="flex flex-row items-center justify-between px-[16px] py-[5px] border border-2 border-transparent hover:border hover:border-2 hover:border-slate-600 hover:rounded-[12px] hover:duration-50 duration-50">
                                <div className="flex flex-row justify-center items-center gap-[8px]">
                                    <div>
                                        <ImageImporter src={'/img/icons/syscoin.svg'} alt={'syscoin icon'} h={50} w={50}/>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="capitalize text-[16px] text-accent font-['Arial'] font-normal not-italic">Syscoin</span>
                                        <span className="uppercase text-[12px] text-neutral font-['Arial'] font-normal not-italic">sys</span>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <span className="capitalize text-[16px] text-accent font-['Arial'] font-normal not-italic">200</span>
                                    <span className="uppercase text-[12px] text-neutral font-['Arial'] font-normal not-italic">$3.66</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SelectTokenModal;