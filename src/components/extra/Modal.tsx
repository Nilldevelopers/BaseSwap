import React from 'react';

const Modal = (props: {
    tokenName: string,
    className?: string,
    children: React.ReactNode
}) => {
    return (
        <>
            <input type="checkbox" id={props.tokenName} className="modal-toggle"/>
            <div className="modal">
                <div className={`modal-box ${props.className}`}>
                    <div className="flex flex-col gap-[26px]">
                        <div className="flex flex-row items-center justify-between">
                            <input type="text" placeholder="Search by name,symbol or address"
                                   className="input w-full max-w-xs bg-swap-selection-input rounded-[12px]"/>
                            <div className="modal-action mt-0">

                                <label htmlFor={props.tokenName}
                                       className="btn btn-sm btn-circle btn-ghost">✕</label>
                            </div>
                        </div>

                        <React.Fragment>
                            {props.children}
                        </React.Fragment>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;