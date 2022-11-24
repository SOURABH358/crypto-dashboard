import CoinInfo from "./CoinInfo";
import Price__chart from "./Charts/Price__Chart";
function CentreComponent(){
    return (
        <section id="centre__component" className="h-[25rem] p-4 flex gap-4 shadow-md">
            <div className="w-[65%] h-full rounded-lg bg-darker-blue text-white p-4">
                <h3 className="">Price</h3>
                <p className="text-grey text-[0.9rem] pt-2 mb-6">The price of Bitcoin over the last day</p>
                <Price__chart/>
            </div>
            <div className="h-full w-[35%] bg-darker-blue rounded-lg shadow-md py-4">
                <CoinInfo/>
            </div>
        </section>
    )
}

export default CentreComponent;