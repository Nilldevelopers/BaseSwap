import {useBalance, usePublicClient, useWalletClient} from "wagmi";
import {useEffect, useMemo, useState} from "react";
import {erc20, pair, swapPairFactory, swapRouter, weth} from "@/lib/ContractFunctions";
import {Token} from "@/interfaces/IToken";
import {toast} from "react-toastify";
import useWallet from "@/hooks/contracts/useWallet";

function useSwap(tokenA: Token, tokenB: Token, deadline: number, amountA: bigint, amountB: bigint) {
    const walletData = useWallet()
    const publicClient = usePublicClient();
    const walletClient = useWalletClient();

    const [balanceOfTokenA, setBalanceOfTokenA] = useState<bigint>(BigInt(0));
    const [balanceOfTokenB, setBalanceOfTokenB] = useState<bigint>(BigInt(0));


    const [pairAddress, setPairAddress] = useState<`0x${string}`>('0x0000000000000000000000000000000000000000');

    const [reserveA, setReserveA] = useState<bigint>(BigInt(0));
    const [reserveB, setReserveB] = useState<bigint>(BigInt(0));


    const token0 = erc20(publicClient, walletClient.data, tokenA.address);
    const token1 = erc20(publicClient, walletClient.data, tokenB.address);

    const factory = swapPairFactory(publicClient, walletClient.data, '0xDFE9d201CC5865b45024C799Be47D11Db2E326ad');
    const router = swapRouter(publicClient, walletClient.data, '0xb8C8A49b1dc525Dbde457c0a045b1316Ecd7aD9a');
    const wETH = weth(publicClient, walletClient.data, '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80');

    function getAmountOut(amountIn: bigint, reserveIn: bigint, reserveOut: bigint): bigint {
        if (
            (tokenA.address == '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' &&
                tokenB.address == '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80') ||
            (tokenB.address == '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' &&
                tokenA.address == '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80')
        ) {
            return amountIn;
        }

        if (Number(amountIn) <= 0) {
            return BigInt(0);
        }

        if (Number(reserveIn) <= 0 || Number(reserveOut) <= 0) {
            return BigInt(0);
        }

        const amountInWithFee = Number(amountIn) * 9975;
        const numerator = amountInWithFee * Number(reserveOut);
        const denominator = Number(reserveIn) * 10000 + amountInWithFee;
        const amountOut = BigInt(numerator / denominator);

        return amountOut;
    }


    useEffect(() => {
        const pairContract = pair(publicClient, walletClient.data, pairAddress);

        async function fetchReserve() {
            const token0 = await pairContract.read.token0();
            const token1 = await pairContract.read.token1();
            const result = await pairContract.read.getReserves();

            if (tokenA.address === token0) {
                setReserveA(result[0]);
            } else if (tokenA.address === token1) {
                setReserveA(result[1]);
            }

            if (tokenB.address === token0) {
                setReserveB(result[0]);
            } else if (tokenB.address === token1) {
                setReserveB(result[1]);
            }

            if (token0 === '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80') {
                if (tokenA.address === '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80' || tokenA.address === '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
                    setReserveA(result[0]);
                } else if (tokenB.address === '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80' || tokenB.address === '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
                    setReserveB(result[0]);
                }
            } else if (token1 === '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80') {
                if (tokenA.address === '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80' || tokenA.address === '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
                    setReserveA(result[1]);
                } else if (tokenB.address === '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80' || tokenB.address === '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
                    setReserveB(result[1]);
                }
            }

            console.log(result, token0, token1, reserveA, reserveB, tokenA.address === token0, tokenB.address === token1);
        }

        if (pairAddress != '0x0000000000000000000000000000000000000000') {
            fetchReserve();
        } else {
            setReserveB(BigInt(0));
            setReserveA(BigInt(0));
        }
    }, [pairAddress, tokenA, tokenB])

    useEffect(() => {
        async function fetchPairAddress(token0Address: `0x${string}`, token1Address: `0x${string}`) {
            const address = await factory.read.getPair([token0Address, token1Address]);
            console.log(address);
            setPairAddress(address);
        }

        if (tokenA.address == '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
            fetchPairAddress('0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80', tokenB.address);
        } else if (tokenB.address == '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
            fetchPairAddress(tokenA.address, '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80');
        } else {
            fetchPairAddress(tokenA.address, tokenB.address);
        }
    }, [tokenA, tokenB]);
    const {data: userETHBalance} = useBalance({
        address: walletData.walletInfo.address,
    })


    useEffect(() => {
        const fetchBalance = async () => {

            try {
                if (tokenA.address == '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
                    setBalanceOfTokenA(userETHBalance!.value);
                } else {
                    const balanceOfToken0 = await token0.read.balanceOf([walletData.walletInfo.address === undefined ? '0x00000' : walletData.walletInfo.address]);
                    setBalanceOfTokenA(balanceOfToken0);
                }

                if (tokenB.address == '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
                    setBalanceOfTokenB(userETHBalance!.value);
                } else {
                    const balanceOfToken1 = await token1.read.balanceOf([walletData.walletInfo.address === undefined ? '0x00000' : walletData.walletInfo.address]);
                    setBalanceOfTokenB(balanceOfToken1);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchBalance();
    }, [tokenA, tokenB, walletClient]);


    async function swapTokens() {
        if (pairAddress == '0x0000000000000000000000000000000000000000' &&
            tokenA.address != '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' &&
            tokenB.address != '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' &&
            tokenA.address != '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80' &&
            tokenB.address != '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80'
        ) {
            toast.error("The pair does not exist.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark"
            });
        } else if (amountA <= balanceOfTokenA) {
            if (tokenA.address == '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
                if (tokenB.address == '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80') {
                    try {
                        // @ts-ignore
                        let swapTransaction = wETH.write.deposit([], {value: amountA})
                    } catch (e) {
                        console.log(e)
                    }
                } else {
                    try {
                        // @ts-ignore
                        let swapTransaction = router.write.swapETHForExactTokens(
                            [(Number(amountB) * 999 / 1000), ['0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80', tokenB.address], walletData.walletInfo.address === undefined ? '0x00000' : walletData.walletInfo.address, Date.now() + deadline * 60],
                            {value: amountA}
                        )
                    } catch (e) {
                        console.log(e)
                    }
                }
            } else if (tokenB.address == '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee') {
                if (tokenA.address == '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80') {
                    try {
                        // @ts-ignore
                        let swapTransaction = wETH.write.withdraw([amountA])
                    } catch (e) {
                        console.log(e)
                    }
                } else {
                    try {
                        let allowance = await token0.read.allowance([walletData.walletInfo.address === undefined ? '0x00000' : walletData.walletInfo.address, '0xb8C8A49b1dc525Dbde457c0a045b1316Ecd7aD9a']);
                        if (allowance < amountA) {
                            // @ts-ignore
                            let approveTransaction = token0.write.approve(['0xb8C8A49b1dc525Dbde457c0a045b1316Ecd7aD9a', amountA]);
                        }
                        // @ts-ignore
                        let swapTransaction = router.write.swapTokensForExactETH(
                            [(Number(amountB) * 999 / 1000), amountA, [tokenA.address, '0x041638a7D668Bb96121Eb0D7fF0C9241AB9d2f80'], walletData.walletInfo.address === undefined ? '0x00000' : walletData.walletInfo.address, Date.now() + deadline * 60]
                        );
                    } catch (e) {
                        console.log(e)
                    }
                }
            } else {
                try {
                    let allowance = await token0.read.allowance([walletData.walletInfo.address === undefined ? '0x00000' : walletData.walletInfo.address, '0xb8C8A49b1dc525Dbde457c0a045b1316Ecd7aD9a']);
                    if (allowance < amountA) {
                        // @ts-ignore
                        let approveTransaction = token0.write.approve(['0xb8C8A49b1dc525Dbde457c0a045b1316Ecd7aD9a', amountA]);
                    }
                    // @ts-ignore
                    let swapTransaction = router.write.swapTokensForExactTokens(
                        [(Number(amountB) * 999 / 1000), amountA, [tokenA.address, tokenB.address], walletData.walletInfo.address === undefined ? '0x00000' : walletData.walletInfo.address, Date.now() + deadline * 60]
                    );
                } catch (e) {
                    console.log(e)
                }
            }
        }
    }


    return useMemo(() => {
        return {
            getAmountOut,
            balanceOfTokenA,
            balanceOfTokenB,
            reserveA,
            reserveB,
            swapTokens,
        }
    }, [tokenA, tokenB])
}

export default useSwap