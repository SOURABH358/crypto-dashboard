import { FaUserAlt, FaBandcamp, FaChartPie, FaNewspaper, FaEnvelope,FaHeadset } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";
function SideBar() {
    return (
        <section id="side__bar" className="w-[25rem] min-h-screen bg-darker-blue py-4">
            <div id="logo" className="text-medium-blue px-6 text-2xl font-bold">COINF</div>
            <ul id="menu__bar" className="list-none flex flex-col py-12 text-grey">
                <li className="flex py-3 pl-6 gap-2 items-center text-grey  hover:text-medium-blue hover:bg-darkest-blue cursor-pointer">
                    <FaBandcamp className="text-1.5xl" /><span>Overview</span></li>
                <li className="flex py-3 pl-6 gap-2 items-center text-grey hover:text-medium-blue hover:bg-darkest-blue cursor-pointer">
                    <FaUserAlt className="text-1.5xl" /><span>Trader Profile</span></li>
                <li className="flex py-3 pl-6 gap-2 items-center text-grey hover:text-medium-blue hover:bg-darkest-blue cursor-pointer">
                    <FaChartPie className="text-1.5xl" /><span>Echarts</span></li>
                <li className="flex py-3 pl-6 gap-2 items-center text-grey hover:text-medium-blue hover:bg-darkest-blue cursor-pointer">
                    <FaEnvelope className="text-1.5xl" /><span>Mailbox</span></li>
                <li className="flex py-3 pl-6 gap-2 items-center text-grey hover:text-medium-blue hover:bg-darkest-blue cursor-pointer">
                    <FaNewspaper className="text-1.5xl" /><span>Pages</span></li>
            </ul>
            <ul id="others" className="list-none flex flex-col py-12 text-grey">
                <li className="text-grey pl-6 py-3">Others</li>
                <li className="flex py-3 pl-6 gap-2 items-center text-grey  hover:text-medium-blue hover:bg-darkest-blue cursor-pointer">
                    <FaHeadset className="text-1.5xl" /><span>Support</span></li>
                <li className="flex py-3 pl-6 gap-2 items-center text-grey  hover:text-medium-blue hover:bg-darkest-blue cursor-pointer">
                    <BsFillGearFill className="text-1.5xl" /><span>Settings</span></li>
            </ul>
        </section>
    )
}

export default SideBar;