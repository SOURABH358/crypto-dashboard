import { FaUserAlt, FaBandcamp, FaChartPie, FaNewspaper, FaEnvelope } from "react-icons/fa";
function SideBar(){
    return(
        <section id = "side__bar" className="min-h-screen bg-darker-blue py-4">
            <div id ="logo" className="text-medium-blue px-6 text-2xl font-bold">COINF</div>
            <ul id = "menu__bar" className="list-none flex flex-col py-12 text-grey">
                <li className="flex py-3 pl-6 gap-2 items-center text-grey  hover:text-medium-blue hover:bg-darkest-blue">
                    <FaBandcamp className="text-1.5xl"/><span>Overview</span></li>
                <li className="flex py-3 pl-6 gap-2 items-center text-grey hover:text-medium-blue hover:bg-darkest-blue">
                    <FaUserAlt className="text-1.5xl"/><span>Trader Profile</span></li>
                <li className="flex py-3 pl-6 gap-2 items-center text-grey hover:text-medium-blue hover:bg-darkest-blue">
                    <FaChartPie className="text-1.5xl"/><span>Echarts</span></li>
                <li className="flex py-3 pl-6 gap-2 items-center text-grey hover:text-medium-blue hover:bg-darkest-blue">
                    <FaEnvelope className="text-1.5xl"/><span>Mailbox</span></li>
                <li className="flex py-3 pl-6 gap-2 items-center text-grey hover:text-medium-blue hover:bg-darkest-blue">
                    <FaNewspaper className="text-1.5xl"/><span>Pages</span></li>
            </ul>
            <ul id = "others" className="">

            </ul>
        </section>
    )
}

export default SideBar;