import { FaBitcoin } from "react-icons/fa";
function Cards() {
    return <section id="cards__container" className="p-4 grid grid-cols-4 gap-x-4 h-48">
        <div className="w-full h-full bg-gradient-to-r from-medium-blue to-light-blue rounded-lg p-4 flex flex-col justify-between">
            <div className="flex justify-between items-center text-darkest-blue">
                <FaBitcoin className="text-2xl" />
                <div className="flex gap-2">
                    <div className="px-2 border-2 border-white rounded-md text-[0.9rem]">Buy</div>
                    <div className="px-2 border-2 border-white rounded-md text-[0.9rem]">Trade</div>
                </div>
            </div>
            <div className="text-grey">Bitcoin</div>
            <div className="flex justify-between text-white items-center">
                <p className="text-3xl">$ 48,789.50</p>
                <p>-0.58%</p>
            </div>
        </div>
        <div className="w-full h-full bg-gradient-to-r from-dark-purple to-light-purple rounded-lg p-4 flex flex-col justify-between">
        <div className="flex justify-between items-center text-darkest-blue">
                <FaBitcoin className="text-2xl" />
                <div className="flex gap-2">
                    <div className="px-2 border-2 border-white rounded-md text-[0.9rem]">Buy</div>
                    <div className="px-2 border-2 border-white rounded-md text-[0.9rem]">Trade</div>
                </div>
            </div>
            <div className="text-grey">Bitcoin</div>
            <div className="flex justify-between text-white items-center">
                <p className="text-3xl">$ 48,789.50</p>
                <p>-0.58%</p>
            </div>
        </div>
        <div className="w-full h-full bg-gradient-to-r from-pink to-light-pink rounded-lg p-4 flex flex-col justify-between">
        <div className="flex justify-between items-center text-darkest-blue">
                <FaBitcoin className="text-2xl" />
                <div className="flex gap-2">
                    <div className="px-2 border-2 border-white rounded-md text-[0.9rem]">Buy</div>
                    <div className="px-2 border-2 border-white rounded-md text-[0.9rem]">Trade</div>
                </div>
            </div>
            <div className="text-grey">Bitcoin</div>
            <div className="flex justify-between text-white items-center">
                <p className="text-3xl">$ 48,789.50</p>
                <p>-0.58%</p>
            </div>
        </div>
        <div className="w-full h-full bg-gradient-to-r from-dark-green to-light-green rounded-lg p-4 flex flex-col justify-between">
        <div className="flex justify-between items-center text-darkest-blue">
                <FaBitcoin className="text-2xl" />
                <div className="flex gap-2">
                    <div className="px-2 border-2 border-white rounded-md text-[0.9rem]">Buy</div>
                    <div className="px-2 border-2 border-white rounded-md text-[0.9rem]">Trade</div>
                </div>
            </div>
            <div className="text-grey">Bitcoin</div>
            <div className="flex justify-between text-white items-center">
                <p className="text-3xl">$ 48,789.50</p>
                <p>-0.58%</p>
            </div>
        </div>
    </section>
}

export default Cards