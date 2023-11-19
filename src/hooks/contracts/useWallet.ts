import {getAccount} from "@wagmi/core";
import {useEthersProvider} from "@/hooks/contracts/useEthersProvider";
import {useEffect, useState} from "react";

const useWallet = () => {
    const [networkInfo, setNetworkInfo] = useState<{
        id: bigint,
        name: string
    }>({
        id: BigInt(0),
        name: ""
    })
    const [blockNumber, setBlockNumber] = useState<number>(0)
    const account = getAccount();
    const ethersProvider = useEthersProvider()
    const fetchNetworkData = async (): Promise<void> => {
        try {
            const networkData = await ethersProvider.getNetwork().then(r => {
                return {
                    id: r.chainId,
                    name: r.name
                }
            })
            setNetworkInfo(networkData)

        } catch (error) {
            console.error('Error fetching total supply:', error);
        }
    };
    const fetchBlockData = async (): Promise<void> => {
        try {
            const blockNumber = await ethersProvider.getBlockNumber();
            setBlockNumber(blockNumber)

        } catch (error) {
            console.error('Error fetching total supply:', error);
        }
    };

    useEffect((): void => {
        fetchNetworkData().then(res => console.log(res));
        fetchBlockData().then(res => console.log(res));
    }, [ethersProvider]);


    return {
        walletInfo: account,
        networkInfo,
        blockNumber
    };
};

export default useWallet;
