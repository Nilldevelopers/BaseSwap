import {getAccount, GetAccountResult} from "@wagmi/core";
import {useEthersProvider} from "@/hooks/contracts/useEthersProvider";
import {useEffect, useState} from "react";
import {INetworkInfo} from "@/interfaces/INetworkInfo";

interface IWallet {
    walletInfo: GetAccountResult,
    networkInfo: INetworkInfo,
    blockNumber: number
}

const useWallet = (): IWallet => {
    const [networkInfo, setNetworkInfo] = useState<INetworkInfo>({
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
        fetchNetworkData()
        fetchBlockData()
    }, [ethersProvider]);


    return {
        walletInfo: account,
        networkInfo,
        blockNumber
    };
};

export default useWallet;
