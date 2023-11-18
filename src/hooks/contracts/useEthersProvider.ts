import {usePublicClient} from "wagmi";
import {PublicClientToProvider} from "@/providers/PublicClientToProvider";
import {useMemo} from "react";

/** Hook to convert a viem Public Client to an ethers.js Provider. */
export function useEthersProvider({ chainId }: { chainId?: number } = {}) {
    const publicClient = usePublicClient({ chainId })
    return useMemo(() => PublicClientToProvider(publicClient), [publicClient])
}
