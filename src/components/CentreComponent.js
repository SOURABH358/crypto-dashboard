import CoinInfo from "./CoinInfo";
import Price__chart from "./Charts/Price__Chart";
import { GlobalContext } from "../Context";
function CentreComponent() {
    const {coins, current, changeCurrent} = GlobalContext();

    function getOptions(){
        return coins.map((el,index)=>{
            return <option key = {index} value={el.symbol}>{el.symbol}</option>
        })
    }
    return (
        <section id="centre__component" className="h-[23rem] px-4 flex gap-4 shadow-lg">
            <div className="w-[65%] h-full rounded-lg bg-darker-blue text-white p-4">
                <div className="flex justify-between">
                    <h3 className="">Price</h3>
                    <p>{current.name}</p>
                    <select name="coins" id="coins" className="bg-darker-blue border-[1px] p-1 text-[0.8rem] rounded-md" value={current.symbol} onChange={(e)=>changeCurrent(e)}>

                        {getOptions()}
                    </select>
                </div>
                <p className="text-grey text-[0.9rem] pt-2 mb-6">The price of {current.name} over the last day</p>
                <Price__chart />
            </div>
            <div className="h-full w-[35%] bg-darker-blue rounded-lg shadow-lg py-4">
                <CoinInfo />
            </div>
        </section>
    )
}

export default CentreComponent;