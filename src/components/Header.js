import { GoGraph } from "react-icons/go";
import { FaBell, FaUserAlt } from "react-icons/fa";
import { AiFillMessage, AiOutlineMenu } from "react-icons/ai";
import { GlobalContext } from "../Context";
function Header() {
    
    const {setShowNav, displayAccount, setDisplayAccount} = GlobalContext()
    return (
        <nav className="w-full flex justify-between text-white px-4 lg:px-8 py-4 bg-darker-blue shadow-md items-center">
            <div className="text-2xl hidden lg:block">Overview</div>
            
            <div className="static lg:hidden text-2xl flex gap-2 items-center">
                <AiOutlineMenu className="text-white cursor-pointer" onClick={()=>setShowNav(true)}/>
                <p className="text-medium-blue font-semibold">CoinF</p>
            </div>
            <FaUserAlt className="text-white text-2xl cursor-pointer hover:text-medium-blue lg:hidden" onClick={()=>setDisplayAccount(!displayAccount)}/>
            {displayAccount?
            <ul id="tabs" className={"fixed top-[-15rem] right-0 p-4 items-start  lg:p-0 bg-darker-blue z-10 flex flex-col lg:static lg:flex-row lg:items-center gap-6 "}>
                <li className="flex items-center gap-2 hover:text-medium-blue cursor-pointer">
                    <FaBell className="text-grey lg:hover:text-medium-blue" />
                    <p className="block lg:hidden">Notify</p></li>
                <li className="flex items-center gap-2 hover:text-medium-blue cursor-pointer">
                    <AiFillMessage className="text-grey lg:hover:text-medium-blue" />
                    <p className="block lg:hidden">Message</p></li>
                <li className="flex items-center gap-2 hover:text-medium-blue cursor-pointer">
                    <GoGraph className="text-grey hover:text-medium-blue" />
                    <span className="text-[0.9rem]">Reports</span>
                </li>
                <li className="flex items-center gap-2 hover:text-medium-blue cursor-pointer">
                    <FaUserAlt className="text-grey hover:text-medium-blue" />
                    <span className="text-[0.9rem]">John Doe</span>
                </li>
            </ul>:
            <ul id="tabs" className={"fixed top-20 right-0 p-4 items-start  lg:p-0 bg-darker-blue z-10 flex flex-col lg:static lg:flex-row lg:items-center gap-6 "}>
                <li className="flex items-center gap-2 hover:text-medium-blue cursor-pointer">
                    <FaBell className="text-grey lg:hover:text-medium-blue" />
                    <p className="block lg:hidden">Notify</p></li>
                <li className="flex items-center gap-2 hover:text-medium-blue cursor-pointer">
                    <AiFillMessage className="text-grey lg:hover:text-medium-blue" />
                    <p className="block lg:hidden">Message</p></li>
                <li className="flex items-center gap-2 hover:text-medium-blue cursor-pointer">
                    <GoGraph className="text-grey hover:text-medium-blue" />
                    <span className="text-[0.9rem]">Reports</span>
                </li>
                <li className="flex items-center gap-2 hover:text-medium-blue cursor-pointer">
                    <FaUserAlt className="text-grey hover:text-medium-blue" />
                    <span className="text-[0.9rem]">John Doe</span>
                </li>
            </ul>}
        </nav>
    )
}

export default Header;