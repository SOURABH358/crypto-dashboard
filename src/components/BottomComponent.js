import { FcApproval } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";
import { GlobalContext } from "../Context";
import { formatCurrency } from "./Utils/formatCurrency";
import Investment__Chart from "./Charts/Investment__Chart";

function BottomComponent() {
    const { exchanges } = GlobalContext();
    function getExchanges() {
        return exchanges.map(el => {
            return <div key={el.rank} className="grid grid-cols-[1fr,4fr,4fr,4fr,4fr] py-4 border-b-2">
                <p>{el.rank}</p>
                <div className="flex gap-2">
                    <img className="w-6" src={el.iconUrl} alt={el.name}/>
                    <p>{el.name}</p>
                </div>
                <p>{el.numberOfMarkets}</p>
                <p>$ {formatCurrency(el["24hVolume"])}</p>
                {el.recommended ? <FcApproval className="text-2xl" /> : <FaTimes className="text-2xl text-orange" />}
            </div>
        })
    }
    // function getGlobalStats() {
    //     return globalStats.newestCoins?globalStats.newestCoins.map(el => {
    //         return <div key={el.rank} className="grid grid-cols-[2fr,3fr,3fr] py-4 border-b-2">
    //             <div className="flex gap-2">
    //                 <img className="w-6" src={el.iconUrl} alt={el.name}/>
    //             </div>
    //             <p>{el.symbol}</p>
    //             <p>{el.name}</p>
    //         </div>
    //     }):'';
    // }
    return (
        <section className="h-fit lg:h-[15rem] p-4 flex flex-col lg:flex-row gap-4">
            <div className="text-white flex flex-col bg-darker-blue rounded-md p-4 w-full h-[25rem] lg:h-full lg:w-[65%] overflow-y-scroll scrollbar-thin scrollbar-thumb-medium-blue">
                <p className="mb-2 text-[1.25rem] font-semibold text-center py-4">Exchange Listings</p>
                <div className="grid grid-cols-[1fr,4fr,4fr,4fr,4fr] py-2 text-grey text-[0.8rem] border-b-2">
                    <p>S.No</p>
                    <p>Exchanges</p>
                    <p>No of Market</p>
                    <p>24h Trade Volume</p>
                    <p>Recommended</p>
                </div>
                {getExchanges()}
            </div>
            <div className="text-white flex flex-col bg-darker-blue rounded-md p-4 w-full h-[18rem] lg:h-full lg:w-[35%]">
                <p className="text-[2.5xl] font-semibold text-center">Investment HIstory</p>
                {/* <div className="grid grid-cols-[2fr,3fr,3fr] py-2 text-grey text-[0.8rem] border-b-2">
                    <p>Icon</p>
                    <p>Symbol</p>
                    <p>Name</p>
                </div> */}
                <Investment__Chart/>
            </div>
        </section>
    )
}
export default BottomComponent;