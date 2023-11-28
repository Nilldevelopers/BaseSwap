import React from 'react';
import Modal from "@/components/extra/Modal";
import ImageImporter from "@/plugin/ImageImporter";
// interface Iprops {
//     tolerance : number
//     setTolerance : () => void
//     speed : number
//     setSpeed : () => void
//     deadline : number
//     setDeadline : () => void
// }
function SettingModal({
                          tolerance,
                          setTolerance,
                          speed,
                          setSpeed,
                          deadline,
                          setDeadline
                      }: any) {
    return (
        <Modal titleModal={"Setting"} modalName={"setting-modal"}>
            <section className="w-full flex flex-wrap p-2">
                <div className="w-full flex flex-wrap rounded-xl items-center  py-2">
                    <div className='w-full flex flex-wrap rounded-xl items-center'>
                        <ImageImporter src={"/img/icons/chart-line-icon.svg"} w={25} h={25}/>
                        <span className="text-gray-400 font-bold mx-2">Slippage Tolerance</span>
                    </div>
                    <div className="w-full mt-3 flex  bg-swap-selection-input items-center rounded-xl p-3">
                        <div className="w-1/3">
                            <input value={tolerance} onChange={(e) => setTolerance(e?.target?.value) } type="number" className="input w-full text-xl bg-transparent"/>
                        </div>
                        <div className="w-2/3 flex flex-wrap items-center  ">
                            <div className="w-full px-2 flex flex-wrap justify-between items-center">
                                 <span className="text-gray-400 hover:[text-shadow:_0px_5px_8px_#EF233C] font-bold cursor-pointer">0.1%</span>
                                 <span className="text-gray-400 hover:[text-shadow:_0px_5px_8px_#EF233C] font-bold cursor-pointer">0.5%</span>
                                 <span className="text-gray-400 hover:[text-shadow:_0px_5px_8px_#EF233C] font-bold cursor-pointer">1%</span>
                                 <span className="text-gray-400 hover:[text-shadow:_0px_5px_8px_#EF233C] font-bold cursor-pointer">2%</span>
                            </div>
                            <div className="w-full  flex flex-wrap mt-2">
                                <div
                                    className="w-full bg-custom-cart rounded-xl flex flex-wrap justify-between  p-2 ">
                                    <input value={tolerance} onChange={(e) => setTolerance(e.target.value)} type="range" step="4"
                                           className="range range-sm range-error rounded-md"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-wrap rounded-xl items-center  py-2">
                    <div className='w-full flex flex-wrap rounded-xl items-center'>
                        <ImageImporter src={"/img/icons/speed.svg"} w={25} h={25}/>
                        <span className="text-gray-400 font-bold mx-2">Transaction speed</span>
                    </div>
                    <div className="w-full mt-3 flex  bg-swap-selection-input items-center rounded-xl p-3">
                        <div className="w-1/3">
                            <input type="text" value={speed} onChange={(e) => setSpeed(e?.target.value)} className="input w-full font-bold text-xl bg-transparent"/>
                        </div>
                        <div className="w-2/3 flex flex-wrap items-center  ">
                            <div className="w-full px-2 flex flex-wrap justify-between items-center">
                                <span className="text-gray-400 hover:[text-shadow:_0px_5px_8px_#EF233C] font-bold cursor-pointer">Normal</span>
                                <span className="text-gray-400 hover:[text-shadow:_0px_5px_8px_#EF233C] font-bold cursor-pointer">Fast</span>
                                <span className="text-gray-400 hover:[text-shadow:_0px_5px_8px_#EF233C] font-bold cursor-pointer">Instant</span>
                            </div>
                            <div className="w-full  flex flex-wrap mt-2">
                                <div
                                    className="w-full bg-custom-cart rounded-xl flex flex-wrap justify-between  p-2 ">
                                    <input type="range" step="4"
                                           className="range range-sm range-error rounded-md"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-wrap rounded-xl items-center  py-2">
                    <div className='w-full flex flex-wrap rounded-xl items-center'>
                        <ImageImporter src={"/img/icons/clock-light.svg"} w={25} h={25}/>
                        <span className="text-gray-400 font-bold mx-2">Transaction deadline</span>
                    </div>
                    <div className="w-full mt-3 flex  bg-swap-selection-input items-center rounded-xl p-3">
                        <div className="w-1/3">
                            <input type="number" value={deadline} onChange={(e) => setDeadline(e?.target.value)} className="input w-full font-bold text-xl bg-transparent"/>
                        </div>
                        <div className="w-2/3 flex flex-wrap items-center  ">
                            <div className="w-full px-2 flex flex-wrap justify-end items-center">
                                <span className="text-gray-400 hover:[text-shadow:_0px_5px_8px_#EF233C] font-bold cursor-pointer">minutes</span>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </Modal>
    );
}

export default SettingModal;