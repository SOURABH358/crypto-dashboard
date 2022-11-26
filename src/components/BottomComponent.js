import { FcApproval } from "react-icons/fc";
import { FaTimes } from "react-icons/fa";
import { GlobalContext } from "../Context";

function BottomComponent() {
    const {exchanges} = GlobalContext();
    function getExchanges(){
        return exchanges.map(el=>{
            return <div key={el.rank} className="grid grid-cols-[1fr,4fr,4fr,4fr,4fr] py-4 border-b-2">
            <p>{el.rank}</p>
            <div className="flex gap-2">
                <img className="w-6" src={el.iconUrl} />
                <p>{el.name}</p>
            </div>
            <p>{el.numberOfMarkets}</p>
            <p>$ {parseFloat(el["24hVolume"]).toFixed(2)}</p>
            {el.recommended?<FcApproval className="text-2xl" />:<FaTimes className="text-2xl text-orange" />}
        </div>
        })
    }
    return (
        <section className="h-[15rem] p-4 flex gap-4">
            <div className="text-white flex flex-col bg-darker-blue rounded-md p-4 w-[65%] overflow-y-scroll">
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
        </section>
    )
}
export default BottomComponent;