import {usePublicClient} from 'wagmi'
import {useEffect, useState} from 'react';

interface ITimeStampReturn {
    baseFeePerGas: bigint
    difficulty: bigint
    extraData: `0x${string}`
    gasLimit: bigint
    gasUsed: bigint
    hash: `0x${string}`
    logsBloom: `0x${string}`
    miner: `0x${string}`
    mixHash: `0x${string}`
    nonce: `0x${string}`
    number: bigint
    parentHash: `0x${string}`
    receiptsRoot: `0x${string}`
    sha3Uncles: `0x${string}`
    size: bigint
    stateRoot: `0x${string}`
    timestamp: bigint
    totalDifficulty: bigint
    transactions: `0x${string}`[]
    transactionsRoot: `0x${string}`
    uncles: any[]
}

const initialValue: ITimeStampReturn = {
    baseFeePerGas: BigInt(0),
    difficulty: BigInt(0),
    extraData: '' as `0x${string}`,
    gasLimit: BigInt(0),
    gasUsed: BigInt(0),
    hash: '' as `0x${string}`,
    logsBloom: '' as `0x${string}`,
    miner: '' as `0x${string}`,
    mixHash: '' as `0x${string}`,
    nonce: '' as `0x${string}`,
    number: BigInt(0),
    parentHash: '' as `0x${string}`,
    receiptsRoot: '' as `0x${string}`,
    sha3Uncles: '' as `0x${string}`,
    size: BigInt(0),
    stateRoot: '' as `0x${string}`,
    timestamp: BigInt(0),
    totalDifficulty: BigInt(0),
    transactions: ['' as `0x${string}`],
    transactionsRoot: '' as `0x${string}`,
    uncles: [],
}

function useBlockChainTimeStamp() {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const client = usePublicClient();
    const [block, setBlock] = useState<ITimeStampReturn>(initialValue);

    useEffect((): void => {
        async function fetchBlock(): Promise<void> {
            try {
                const block = await client.getBlock();
                setBlock(block as ITimeStampReturn);
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching block:', error);
                setIsLoading(false)
            }
        }

        fetchBlock();
    }, [client]);

    return {
        isLoading,
        block
    }
}

export default useBlockChainTimeStamp