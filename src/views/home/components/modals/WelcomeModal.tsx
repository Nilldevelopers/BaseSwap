import  {useEffect, useState} from 'react';

const WelcomeModal = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        // Check if the modal has been shown before
        const hasModalBeenShown = localStorage.getItem('hasModalBeenShown');

        if (!hasModalBeenShown) {
            // If the modal has not been shown, set showModal to true
            setShowModal(true);

            // Mark the modal as shown in localStorage
            localStorage.setItem('hasModalBeenShown', 'true');
        }
    }, []); // Empty dependency array ensures this runs only once on component mount

    const handleCloseModal = () => {
        // Set showModal to false to hide the modal
        setShowModal(false);
    };
    return (
        <>
            <input type="checkbox" id="welcome_modal" className="modal-toggle" checked={showModal}/>
            {showModal && (
                <div className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">This modal works with a hidden checkbox!</p>
                        <div className="modal-action">
                            <label htmlFor="welcome_modal"
                                   className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                                   onClick={handleCloseModal}>
                                ✕
                            </label>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default WelcomeModal;