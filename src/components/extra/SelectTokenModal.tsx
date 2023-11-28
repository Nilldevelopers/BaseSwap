import {memo, useState} from 'react';
import ImageImporter from "@/plugin/ImageImporter";
import Modal from "@/components/extra/Modal";
import dynamic from "next/dynamic";
import {IToken, Token} from "@/interfaces/IToken";
import {formatEther} from "viem";
import FetchTokenBalance from "@/lib/FetchTokenBalance";
import {SelectTokenModalButtonHardCodeData} from "@/data/token/SelectTokenModalButtonHardCodeData";


const SelectTokenModal = (props: {
    tokenList: IToken,
    fetchSelectToken: (data: Token) => void,
    tokenName: string,
    className?: string
}) => {
    const [searchText, setSearchText] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleChange = (data: string) => {
        setIsLoading(true);

        setTimeout(() => {
            setSearchText(data);
            setIsLoading(false);
        }, 500);
    };

    const filteredTokens = props.tokenList && props.tokenList.tokens
        ? props.tokenList.tokens.filter(token => (
            token.logoURI !== "ipfs://QmXttGpZrECX5qCyXbBQiqgQNytVGeZW5Anewvh2jc4psg" &&
            token.name.includes(searchText)
        ))
        : [];

    return (
        <Modal className={props.className} modalName={props.tokenName} showSearchBox
               callBackSearchText={handleChange}>
            <div className="grid grid-cols-3 gap-4">
                <label
                    htmlFor={props.tokenName}
                    onClick={() => props.fetchSelectToken(SelectTokenModalButtonHardCodeData.ethereum)}
                    className="btn border-2 border-slate-600 rounded-[12px] bg-custom-cart flex-row items-center justify-center flex-nowrap">
                    <ImageImporter w={20} h={20} src={"/img/icons/eth.svg"} alt={"symbol"}/>
                    <span
                        className="capitalize text-[17px] text-accent font-['Inter'] font-normal not-italic">ETH</span>
                </label>
                <label
                    htmlFor={props.tokenName}
                    onClick={() => props.fetchSelectToken(SelectTokenModalButtonHardCodeData.wethereum)}
                    className="btn border-2 border-slate-600 rounded-[12px] bg-custom-cart flex-row items-center justify-center flex-nowrap">
                    <ImageImporter w={20} h={20} src={"/img/logo/weth.png"} alt={"symbol"}/>
                    <span
                        className="capitalize text-[17px] text-accent font-['Inter'] font-normal not-italic">WETH</span>
                </label>
                <label
                    htmlFor={props.tokenName}
                    onClick={() => props.fetchSelectToken(SelectTokenModalButtonHardCodeData.base)}
                    className="btn border-2 border-slate-600 rounded-[12px] bg-custom-cart flex-row items-center justify-center flex-nowrap">
                    <ImageImporter w={20} h={20} src={"/img/logo/SwapLogo.svg"} alt={"symbol"}/>
                    <span
                        className="capitalize text-[17px] text-accent font-['Inter'] font-normal not-italic">Bases</span>
                </label>

            </div>
            <div
                className={`flex flex-col gap-[16px] overflow-y-auto h-60 ${filteredTokens?.length <= 0 ? 'items-center justify-center' : ''}`}>
                {
                    !isLoading ? (filteredTokens?.length > 0 ? (
                            filteredTokens.map((data, index) => {
                                return <label key={index} htmlFor={props.tokenName}
                                              onClick={() => props.fetchSelectToken(data)}
                                              className="flex flex-row items-center justify-between px-[16px] py-[5px] border border-2 border-transparent hover:border hover:border-2 hover:border-slate-600 hover:rounded-[12px] hover:duration-50 duration-50 modal-action mt-0">
                                    <div className="flex flex-row justify-center items-center gap-[8px]">
                                        <div>
                                            <ImageImporter
                                                src={data.logoURI}
                                                alt={`${data.name} icon image`}
                                                h={35}
                                                w={35}
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                        <span
                                            className="capitalize text-[16px] text-accent font-['Arial'] font-normal not-italic">{data.name}</span>
                                            <span
                                                className="uppercase text-[12px] text-neutral font-['Arial'] font-normal not-italic">{data.symbol}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col">
                                    <span
                                        className="capitalize text-[16px] text-accent font-['Arial'] font-normal not-italic">{
                                        Number(formatEther(FetchTokenBalance(data))).toFixed(10)
                                    }</span>
                                        {/*<span*/}
                                        {/*    className="uppercase text-[12px] text-neutral font-['Arial'] font-normal not-italic">$3.66</span>*/}
                                    </div>
                                </label>

                            })
                        ) : (
                            <p className="capitalize text-[17px] text-accent font-['Inter'] font-normal not-italic">No items
                                found</p>))
                        : <>
                            <div className="flex flex-col gap-4 w-52">
                                <div className="flex gap-4 items-center">
                                    <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                                    <div className="flex flex-col gap-4">
                                        <div className="skeleton h-4 w-20"></div>
                                        <div className="skeleton h-4 w-28"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 w-52">
                                <div className="flex gap-4 items-center">
                                    <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                                    <div className="flex flex-col gap-4">
                                        <div className="skeleton h-4 w-20"></div>
                                        <div className="skeleton h-4 w-28"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 w-52">
                                <div className="flex gap-4 items-center">
                                    <div className="skeleton w-16 h-16 rounded-full shrink-0"></div>
                                    <div className="flex flex-col gap-4">
                                        <div className="skeleton h-4 w-20"></div>
                                        <div className="skeleton h-4 w-28"></div>
                                    </div>
                                </div>
                            </div>
                        </>
                }

            </div>
        </Modal>
    );
};

export default dynamic(Promise.resolve(memo(SelectTokenModal)), {ssr: false});