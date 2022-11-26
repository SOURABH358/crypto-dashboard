import { useState } from "react";
import { FaBitcoin, FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { GlobalContext } from "../Context";
function Cards() {
    const { coins } = GlobalContext();
    const slider = document.getElementById('slider')
    // slider.classList.add(`translate-x-+[${displace}%]`)
    
    function displayCards() {
        const colors = [
            "bg-gradient-to-r from-medium-blue to-light-blue",
            "bg-gradient-to-r from-dark-purple to-light-purple",
            "bg-gradient-to-r from-pink to-light-pink",
            "bg-gradient-to-r from-dark-green to-light-green"

        ]
        return coins.map((el,i) => {
            return <div key = {el.rank} className={"w-[19rem] h-full rounded-lg p-4 flex flex-col justify-between shadow-lg " + colors[i%4]}>
                <div className="flex justify-between items-center text-darkest-blue">
                    <img src={el.iconUrl} className="w-[2rem]" />
                    <div className="flex gap-2">
                        <div className="px-2 border-2 border-white rounded-md text-[0.9rem]">Buy</div>
                        <div className="px-2 border-2 border-white rounded-md text-[0.9rem]">Trade</div>
                    </div>
                </div>
                <div className="text-white">{el.name}</div>
                <div className="flex justify-between text-white items-center">
                    <p className="text-3xl">$ {parseFloat(el.price,2).toFixed(2)}</p>
                    <p>{el.change}%</p>
                </div>
            </div>
        })

    }
    return <section id="cards__container" className="relative overflow-scroll overflow-y-hidden scrollbar-thin  w-full h-48 p-4">
        
        <div id="slider"className={"w-fit flex gap-x-4 h-full"}>
            {displayCards()}
        </div>

    </section>
}

export default Cards
{/* <div className="w-[19rem] h-full bg-gradient-to-r from-medium-blue to-light-blue rounded-lg p-4 flex flex-col justify-between shadow-lg">
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
</div> */}