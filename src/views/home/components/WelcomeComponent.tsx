import React from 'react';

const WelcomeComponent = () => {
    return (
        <>
            <input type="checkbox" id="welcome_modal" className="modal-toggle"/>
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">This modal works with a hidden checkbox!</p>
                    <div className="modal-action">
                        <label htmlFor="welcome_modal"
                               className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WelcomeComponent;