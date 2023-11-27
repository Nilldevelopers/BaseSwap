import {Token} from "@/interfaces/IToken";
import useTokenBalance from "@/hooks/contracts/useTokenBalance";

const FetchTokenBalance = (token: Token): bigint => {
    const balanceOf = useTokenBalance(token.address)
    return balanceOf
}
export default FetchTokenBalance