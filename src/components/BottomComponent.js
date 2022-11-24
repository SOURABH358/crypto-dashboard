import { FcApproval } from "react-icons/fc";
function BottomComponent() {
    return (
        <section className="h-[15rem] p-4 flex gap-4">
            <div className="text-white flex flex-col bg-darker-blue rounded-md p-4 w-[65%] overflow-y-scroll">
                <p className="mb-2 text-[1.25rem] font-semibold">Bitcoin Exchange Listings</p>
                <div className="grid grid-cols-[1fr,4fr,4fr,4fr,4fr] py-2 text-grey text-[0.8rem] border-b-2">
                    <p>S.No</p>
                    <p>Exchanges</p>
                    <p>Price</p>
                    <p>24h Trade Volume</p>
                    <p>Recommended</p>
                </div>
                <div className="grid grid-cols-[1fr,4fr,4fr,4fr,4fr] py-4 border-b-2">
                    <p>1</p>
                    <div className="flex gap-2">
                        <img className="w-6" src="https://cdn.coinranking.com/mDTK5qrmq/binance.svg?size=30x30" />
                        <p>Binance</p>
                    </div>
                    <p>$ 16,535.74</p>
                    <p>$ 6.82 Billion</p>
                    <FcApproval className="text-2xl" />
                </div>
                <div className="grid grid-cols-[1fr,4fr,4fr,4fr,4fr] py-4 border-b-2">
                    <p>1</p>
                    <div className="flex gap-2">
                        <img className="w-6" src="https://cdn.coinranking.com/mDTK5qrmq/binance.svg?size=30x30" />
                        <p>Binance</p>
                    </div>
                    <p>$ 16,535.74</p>
                    <p>$ 6.82 Billion</p>
                    <FcApproval className="text-2xl" />
                </div>
            </div>
        </section>
    )
}
export default BottomComponent;