import React from 'react';

const LiquidityAddRemoveModal = () => {
    return (
        <>
            <input type="checkbox" id="add_remove_liquidity_modal" className="modal-toggle"/>
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">This modal works with a hidden checkbox!</p>
                    <div className="modal-action">
                        <label htmlFor="add_remove_liquidity_modal"
                               className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LiquidityAddRemoveModal;