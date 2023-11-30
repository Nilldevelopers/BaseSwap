import Link from "next/link";
import {FaMoneyBillTransfer} from "react-icons/fa6";
import {FaWallet} from "react-icons/fa";
import {GrMoney} from "react-icons/gr";

function MobileNavigation():JSX.Element {
    return (
        <header
            className="md:hidden block fixed z-[10] w-[82%] h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
                <button data-tooltip-target="tooltip-home" type="button"
                        className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <Link href={'/'} passHref={true} className="flex items-center flex-wrap">
                        <FaMoneyBillTransfer size={25}/>
                        <span className="text-[10px]">Home</span>
                    </Link>
                </button>
                <div id="tooltip-home" role="tooltip"
                     className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Home
                    <div className="tooltip-arrow"></div>
                </div>
                <button data-tooltip-target="tooltip-wallet" type="button"
                        className="inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <FaWallet size={20}/>
                    <span className="text-[10px] ">Wallet</span>
                </button>
                <div id="tooltip-wallet" role="tooltip"
                     className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Wallet
                    <div className="tooltip-arrow"></div>
                </div>
                <div className="flex items-center justify-center">
                    <button data-tooltip-target="tooltip-new" type="button"
                            className="inline-flex items-center justify-center w-10 h-10 font-medium bg-primary rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800">
                        <svg className="w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                                  strokeWidth="2" d="M9 1v16M1 9h16"/>
                        </svg>
                        <span className="sr-only">New item</span>
                    </button>
                </div>
                <div id="tooltip-new" role="tooltip"
                     className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Create new item
                    <div className="tooltip-arrow"></div>
                </div>
                <button data-tooltip-target="tooltip-settings" type="button"
                        className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <svg
                        className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                        aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
                    </svg>
                    <span className="text-[10px] mt-1">Settings</span>
                </button>
                <div id="tooltip-settings" role="tooltip"
                     className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Settings
                    <div className="tooltip-arrow"></div>
                </div>


                <button data-tooltip-target="tooltip-profile" type="button"
                        className="inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
                    <Link passHref={true} className="flex flex-wrap items-center justify-center" href='/liquidity'>
                        <GrMoney size={20}/>
                        <span className="text-[10px] mt-1">Liquidity</span>
                    </Link>
                </button>

                <div id="tooltip-profile" role="tooltip"
                     className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Liquidity
                    <div className="tooltip-arrow"></div>
                </div>
            </div>
        </header>
    )
}

export default MobileNavigation