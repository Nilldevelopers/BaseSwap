
const Balance = () => {
    return (
        <div className="w-full flex flex-wrap mt-5">
            <div className="flex flex-col w-full">
                <div className="divider divider-primary">Your Balance</div>
            </div>
            <div className="w-full flex justify-between">
                <span>0.1-2</span>
                <span>0</span>
            </div>
            <div className="w-full flex justify-between">
                <span className="text-gray-400">Pooled Token0-Token1</span>
                <span className="text-gray-400">Staked Token0-Token1</span>
            </div>
        </div>
    );
};

export default Balance;