
const ReverseInfo = () => {
    return (
        <div className='w-full p-2 flex flex-wrap mt-5'>
            <div className="flex flex-col w-full py-1">
                <div className="divider divider-primary">Reserve Info</div>
            </div>
            <div className="w-full flex justify-between">
                <span className="px-2">0.026</span>
                <span className="px-2">56.26490</span>
                <span className="px-2">0.1 %</span>
            </div>
            <div className="w-full flex justify-between">
                <span className="px-2">opBNB</span>
                <span className="px-2">ECHO2</span>
                <span className="px-2">Slippage</span>
            </div>
        </div>
    );
};

export default ReverseInfo;