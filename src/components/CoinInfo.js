import { WiDayCloudyGusts } from "react-icons/wi";
function CoinInfo() {
    return (
        <>
            <div className="flex justify-between px-4 mb-4">
            <h3 className="font-bold text-[1.25rem] text-white ">Value Statistics</h3>
            <div className="w-8">
                <img className="w-full" src="https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg"/>
            </div>
            </div>
            <div className="flex flex-col w-full">
                <div className="flex text-white gap-4 items-center w-full py-2 px-4 hover:bg-darkest-blue">
                    <WiDayCloudyGusts className="text-3xl text-dark-blue" />
                    <div className="flex w-[90%] justify-between">
                        <p className="text-grey">Price to USD</p>
                        <p>$ 16,589.05</p>
                    </div>
                </div>
                <div className="flex text-white gap-4 items-center w-full py-2 px-4 hover:bg-darkest-blue">
                    <WiDayCloudyGusts className="text-3xl text-dark-blue" />
                    <div className="flex w-[90%] justify-between">
                        <p className="text-grey">Price to BTC</p>
                        <p>1.00 BTC</p>
                    </div>
                </div>
                <div className="flex text-white gap-4 items-center w-full py-2 px-4 hover:bg-darkest-blue">
                    <WiDayCloudyGusts className="text-3xl text-dark-blue" />
                    <div className="flex  w-[90%] justify-between">
                        <p className="text-grey">Rank</p>
                        <p>1</p>
                    </div>
                </div>
                <div className="flex text-white gap-4 items-center w-full py-2 px-4 hover:bg-darkest-blue">
                    <WiDayCloudyGusts className="text-3xl text-dark-blue" />
                    <div className="flex  w-[90%] justify-between">
                        <p className="text-grey">24h Volume</p>
                        <p>$ 22.70 billion</p>
                    </div>
                </div>
                <div className="flex text-white gap-4 items-center w-full py-2 px-4 hover:bg-darkest-blue">
                    <WiDayCloudyGusts className="text-3xl text-dark-blue" />
                    <div className="flex  w-[90%] justify-between">
                        <p className="text-grey">Market Cap</p>
                        <p>$ 318.77 billion</p>
                    </div>
                </div>
                <div className="flex text-white gap-4 items-center w-full py-2 px-4 hover:bg-darkest-blue">
                    <WiDayCloudyGusts className="text-3xl text-dark-blue" />
                    <div className="flex  w-[90%] justify-between">
                        <p className="text-grey">Volume/Market Cap</p>
                        <p>0.0767</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoinInfo;