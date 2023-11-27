import React, {useEffect, useState} from 'react';
import SliderSwiper from "@/plugin/SliderSwiper";

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
                <div className="modal p-1">
                    <div className="modal-box  w-11/12 max-w-7xl p-0">
                        <SliderSwiper
                            event={handleCloseModal}
                            htmlFor={"welcome_modal"}
                            textBtn={" Skip Tutorial"}
                            elements={[<HeroSelection1 key={1}/>, <HeroSelection2 key={2}/>]}
                        />
                        <div className="modal-action">
                            <label htmlFor="welcome_modal"
                                   className="btn btn-sm z-10 btn-circle btn-ghost absolute right-2 top-2"
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


const HeroSelection1 = () => {
    return(
            <div className='p-3 md:p-0 md:w-1/3 md:h-2/3  flex flex-wrap items-center justify-center bg-opacity-10 backdrop-blur-sm rounded'>
                <h3 className="m-0 font-bold w-full text-center p-2 border-b-2 border-red-500">
                    First Step
                </h3>
                <p className="w-full flex text-center font-bold py-2 text-[15px]">
                    The swap page of a DEX aims to provide a seamless and transparent trading experience for users, empowering them to exchange cryptocurrencies in a secure and decentralized manner. It&apos;s a key feature of DEX platforms that distinguishes them from traditional centralized exchanges.
                </p>
            </div>
    )
}
const HeroSelection2 = () => {
    return(
            <div className='p-3 md:p-0 md:w-1/3 md:h-2/3  flex flex-wrap items-center justify-center bg-opacity-10 backdrop-blur-sm rounded'>
                <h3 className="m-0 font-bold w-full text-center p-2 border-b-2 border-red-500">
                    Second Step
                </h3>
                <p className="w-full flex text-center font-bold py-2 text-[15px]">
                    The swap page of a DEX aims to provide a seamless and transparent trading experience for users, empowering them to exchange cryptocurrencies in a secure and decentralized manner. It&apos;s a key feature of DEX platforms that distinguishes them from traditional centralized exchanges.
                </p>
            </div>
    )
}


export default WelcomeModal;