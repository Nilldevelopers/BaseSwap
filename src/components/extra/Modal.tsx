import {FC, ReactNode, useState} from "react";


interface ModalProps {
    modalName: string;
    className?: string;
    showSearchBox?: boolean;
    children: ReactNode;
    callBackSearchText?: (data: string) => void
}

const Modal: FC<ModalProps> = (props) => {

    return (
        <>
            <input type="checkbox" id={props.modalName} className="modal-toggle"/>
            <div className="modal">
                <div className={`modal-box ${props.className}`}>
                    <div className="flex flex-col gap-[26px]">
                        {props.showSearchBox && (
                            <div className="flex flex-row items-center justify-between">
                                <input
                                    type="text"
                                    placeholder="Search by name, symbol, or address"
                                    className="input w-full max-w-xs bg-swap-selection-input rounded-[12px]"
                                    onChange={(e) => props.callBackSearchText!(e.target.value)}
                                />
                                <div className="modal-action mt-0">
                                    <label htmlFor={props.modalName} className="btn btn-sm btn-circle btn-ghost">
                                        ✕
                                    </label>
                                </div>
                            </div>
                        )}
                        {!props.showSearchBox && (
                            <div className="modal-action mt-0 flex justify-end">
                                <label htmlFor={props.modalName} className="btn btn-sm btn-circle btn-ghost">
                                    ✕
                                </label>
                            </div>
                        )}

                        <>{props.children}</>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Modal;
