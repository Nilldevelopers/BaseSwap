import {IToken} from "@/interfaces/IToken";
import TokenSection from "@/views/liquidity/components/deposit/TokenSection";
import ReverseInfo from "@/views/liquidity/components/deposit/ReverseInfo";
import Balance from "@/views/liquidity/components/deposit/Balance";


const Deposit = (props: { tokenData: IToken }) => {
    return (
        <div className="w-full p-2 flex flex-wrap ">
            <div className="w-full h-[300px] md:h-auto overflow-y-scroll px-2 -mt-7">
                <TokenSection modalName="select_token_1" tokenData={props.tokenData}
                              callback={data => console.log(data)}/>
                <TokenSection modalName="select_token_2" tokenData={props.tokenData}
                              callback={data => console.log(data)}/>
                <ReverseInfo/>
                <Balance/>
                <div className="w-full my-2">
                    <button className="btn w-full bg-custom-red">
                        <span className="capitalize">Enter an amount</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Deposit;