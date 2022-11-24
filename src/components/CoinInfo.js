import { FcAreaChart,FcPositiveDynamic, FcCurrencyExchange, FcLineChart, FcMoneyTransfer,FcMindMap } from "react-icons/fc";
function CoinInfo() {
    return (
        <>
            <div className="flex justify-between px-4 mb-4">
            <h3 className="font-bold text-[1.25rem] text-white ">Value Statistics</h3>
            <div className="w-8 text-white">
                <img className="w-full" src="https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg"/>
            </div>
            </div>
            <div className="flex flex-col w-full">
                <div className="flex text-white gap-4 items-center w-full py-2 px-4 hover:bg-darkest-blue">
                    <FcCurrencyExchange className="text-3xl text-medium-blue" />
                    <div className="flex w-[90%] justify-between">
                        <p className="text-grey">Price to USD</p>
                        <p className="text-success-green">$ 16,589.05</p>
                    </div>
                </div>
                <div className="flex text-white gap-4 items-center w-full py-2 px-4 hover:bg-darkest-blue">
                    <FcMoneyTransfer className="text-3xl text-medium-blue" />
                    <div className="flex w-[90%] justify-between">
                        <p className="text-grey text-[0.9rem]">Price to BTC</p>
                        <p className="text-success-green">1.00 BTC</p>
                    </div>
                </div>
                <div className="flex text-white gap-4 items-center w-full py-2 px-4 hover:bg-darkest-blue">
                    <FcPositiveDynamic className="text-3xl text-medium-blue" />
                    <div className="flex  w-[90%] justify-between">
                        <p className="text-grey text-[0.9rem]">Rank</p>
                        <p className="text-success-green">1</p>
                    </div>
                </div>
                <div className="flex text-white gap-4 items-center w-full py-2 px-4 hover:bg-darkest-blue">
                    <FcLineChart className="text-3xl" />
                    <div className="flex  w-[90%] justify-between">
                        <p className="text-grey text-[0.9rem]">24h Volume</p>
                        <p className="text-success-green">$ 22.70 billion</p>
                    </div>
                </div>
                <div className="flex text-white gap-4 items-center w-full py-2 px-4 hover:bg-darkest-blue">
                    <FcAreaChart className="text-3xl text-medium-blue" />
                    <div className="flex  w-[90%] justify-between">
                        <p className="text-grey text-[0.9rem]">Market Cap</p>
                        <p className="text-success-green">$ 318.77 billion</p>
                    </div>
                </div>
                <div className="flex text-white gap-4 items-center w-full py-2 px-4 hover:bg-darkest-blue">
                    <FcMindMap className="text-3xl text-medium-blue" />
                    <div className="flex  w-[90%] justify-between">
                        <p className="text-grey text-[0.9rem]">Volume/Market Cap</p>
                        <p className="text-success-green">0.0767</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CoinInfo;