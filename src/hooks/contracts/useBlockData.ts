// useWallet.ts

import {useEffect, useState} from 'react';
import {useEthersProvider} from "@/hooks/contracts/useEthersProvider";

// Custom hook to encapsulate account fetching logic
const useBlockData = () => {
    const [blockNumber, setBlockNumber] = useState<number>(0)
    const data = useEthersProvider();

    useEffect((): void => {
        const fetchData = async (): Promise<void> => {
            try {
                const blockNumber = await data.getBlockNumber();
                setBlockNumber(blockNumber)

            } catch (error) {
                console.error('Error fetching total supply:', error);
            }
        };
        fetchData().then(res => console.log(res));

    }, [data]);


    return {
        blockNumber,

    };
};

export default useBlockData;
