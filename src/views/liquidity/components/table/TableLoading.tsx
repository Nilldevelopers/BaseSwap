const TableLoading = () => {
    return (
        <div className="flex flex-col gap-4 w-96 my-5">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
        </div>
    );
};

export default TableLoading;