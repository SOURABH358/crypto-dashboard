import { FaBitcoin } from "react-icons/fa";
function Cards() {
    return <section id="cards__container" className="p-4 grid grid-cols-4 gap-x-4 h-48">
        <div className="w-full h-full bg-gradient-to-r from-medium-blue to-light-blue rounded-lg p-4">
            <div className="flex justify-between items-center">
                <FaBitcoin className="text-2xl" />
                <div className="flex gap-2">
                    <div className="px-2 border-2 border-grey rounded-md">Buy</div>
                    <div className="px-2 border-2 border-grey rounded-md">Trade</div>
                </div>
            </div>
            <div>Bitcoin</div>
        </div>
        <div className="w-full h-full bg-gradient-to-r from-dark-purple to-light-purple rounded-lg">

        </div>
        <div className="w-full h-full bg-gradient-to-r from-pink to-light-pink rounded-lg">

        </div>
        <div className="w-full h-full bg-gradient-to-r from-dark-green to-light-green rounded-lg">

        </div>
    </section>
}

export default Cards