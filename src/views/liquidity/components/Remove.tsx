
import ImageImporter from "@/plugin/ImageImporter";

const Remove = ({callbackTabStatus}: { callbackTabStatus: (data: "Deposit" | "Remove" | "Withdraw") => void }) => {
    return (
        <div className="w-full p-3 flex flex-wrap h-[350px] overflow-y-scroll">

            {
                [1, 2, 3, 4, 5].map((item, index) => (
                    <div key={index}
                         className="w-full flex flex-wrap rounded-[4px] border border-gray-600 my-1 px-[16px] py-[18px] items-center justify-between">
                        <div className="flex items-center justify-center w-full md:w-auto">
                            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                                <div className="avatar">
                                    <div className="w-7 h-7">
                                        <ImageImporter src='/img/icons/tether.svg' w={24}
                                                       h={24}/>
                                    </div>
                                </div>
                                <div className="avatar">
                                    <div className="w-7 h-7">
                                        <ImageImporter src={'/img/icons/eth.svg'} w={24}
                                                       h={24}/>
                                    </div>
                                </div>
                            </div>
                            <div className="font-bold px-2 text-xl">
                                Token0/Token1
                            </div>
                        </div>
                        <button onClick={() => callbackTabStatus("Withdraw")}
                                className="text-gray-400 underline w-full md:w-auto">
                            Withdraw
                        </button>
                    </div>
                ))
            }

        </div>
    );
};

export default Remove;