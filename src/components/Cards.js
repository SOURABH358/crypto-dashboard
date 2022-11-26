import { useState } from "react";
import { FaBitcoin, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { GlobalContext } from "../Context";
function Cards() {
    const [displace, SetDisplace] = useState(true);
    const { coins } = GlobalContext();
    function rightDisplace() {
        SetDisplace(true);
    }
    function leftDisplace() {
        SetDisplace(false);
    }
    function displayCards() {
        return coins.map(el => {
            <div className="w-[19rem] h-full bg-gradient-to-r from-medium-blue to-light-blue rounded-lg p-4 flex flex-col justify-between shadow-lg">
                <div className="flex justify-between items-center text-darkest-blue">
                    <img src={el.iconUrl} className="text-2xl" />
                    <div className="flex gap-2">
                        <div className="px-2 border-2 border-white rounded-md text-[0.9rem]">Buy</div>
                        <div className="px-2 border-2 border-white rounded-md text-[0.9rem]">Trade</div>
                    </div>
                </div>
                <div className="text-white">Bitcoin</div>
                <div className="flex justify-between text-white items-center">
                    <p className="text-3xl">$ 48,789.50</p>
                    <p>-0.58%</p>
                </div>
            </div>
        })

    }
    return <section id="cards__container" className="relative overflow-hidden w-full h-48 p-4">
        <div className="absolute top-0 left-0 flex items-center w-4 h-48 text-white z-10" onClick={leftDisplace}>
            <FaAngleLeft className="text-2xl" />
        </div>
        <div className="absolute right-0 top-0 flex items-center w-4 h-48 z-10 text-white cursor-pointer" onClick={rightDisplace}>
            <FaAngleRight className="text-2xl" />
        </div>
        <div className={"w-fit flex gap-x-4 h-full"}>
            <div className="w-[19rem] h-full bg-gradient-to-r from-medium-blue to-light-blue rounded-lg p-4 flex flex-col justify-between shadow-lg">
                <div className="flex justify-between items-center text-darkest-blue">
                    <FaBitcoin className="text-2xl" />
                    <div className="flex gap-2">
                        <div className="px-2 border-2 border-white rounded-md text-[0.9rem]">Buy</div>
                        <div className="px-2 border-2 border-white rounded-md text-[0.9rem]">Trade</div>
                    </div>
                </div>
                <div className="text-white">Bitcoin</div>
                <div className="flex justify-between text-white items-center">
                    <p className="text-3xl">$ 48,789.50</p>
                    <p>-0.58%</p>
                </div>
            </div>
            <div className="w-[19rem] h-full bg-gradient-to-r from-dark-purple to-light-purple rounded-lg p-4 flex flex-col justify-between shadow-lg">
                <div className="flex justify-between items-center text-darkest-blue">
                    <FaBitcoin className="text-2xl" />
                    <div className="flex gap-2">
                        <div className="px-2 border-2 border-white rounded-md text-[0.9rem]">Buy</div>
                        <div className="px-2 border-2 border-white rounded-md text-[0.9rem]">Trade</div>
                    </div>
                </div>
                <div className="text-white">Bitcoin</div>
                <div className="flex justify-between text-white items-center">
                    <p className="text-3xl">$ 48,789.50</p>
                    <p>-0.58%</p>
                </div>
            </div>
            <div className="w-[19rem] h-full bg-gradient-to-r from-pink to-light-pink rounded-lg p-4 flex flex-col justify-between shadow-lg">
                <div className="flex justify-between items-center text-darkest-blue">
                    <FaBitcoin className="text-2xl" />
                    <div className="flex gap-2">
                        <div className="px-2 border-2 border-white rounded-md text-[0.9rem]">Buy</div>
                        <div className="px-2 border-2 border-white rounded-md text-[0.9rem]">Trade</div>
                    </div>
                </div>
                <div className="text-white">Bitcoin</div>
                <div className="flex justify-between text-white items-center">
                    <p className="text-3xl">$ 48,789.50</p>
                    <p>-0.58%</p>
                </div>
            </div>
            <div className="w-[19rem] h-full bg-gradient-to-r from-dark-green to-light-green rounded-lg p-4 flex flex-col justify-between shadow-lg">
                <div className="flex justify-between items-center text-darkest-blue">
                    <FaBitcoin className="text-2xl" />
                    <div className="flex gap-2">
                        <div className="px-2 border-2 border-white rounded-md text-[0.9rem]">Buy</div>
                        <div className="px-2 border-2 border-white rounded-md text-[0.9rem]">Trade</div>
                    </div>
                </div>
                <div className="text-white">Bitcoin</div>
                <div className="flex justify-between text-white items-center">
                    <p className="text-3xl">$ 48,789.50</p>
                    <p>-0.58%</p>
                </div>
            </div>
            <div className="w-[19rem] h-full bg-gradient-to-r from-dark-green to-light-green rounded-lg p-4 flex flex-col justify-between shadow-lg">
                <div className="flex justify-between items-center text-darkest-blue">
                    <FaBitcoin className="text-2xl" />
                    <div className="flex gap-2">
                        <div className="px-2 border-2 border-white rounded-md text-[0.9rem]">Buy</div>
                        <div className="px-2 border-2 border-white rounded-md text-[0.9rem]">Trade</div>
                    </div>
                </div>
                <div className="text-white">Bitcoin</div>
                <div className="flex justify-between text-white items-center">
                    <p className="text-3xl">$ 48,789.50</p>
                    <p>-0.58%</p>
                </div>
            </div>
        </div>

    </section>
}

export default Cards