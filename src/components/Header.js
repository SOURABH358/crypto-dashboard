import { GoGraph } from "react-icons/go";
import { FaBell, FaUserAlt } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
function Header() {
    return (
        <nav className="w-full flex justify-between text-white px-8 py-4 bg-darker-blue shadow-md">
            <div className="text-2xl">Overview</div>
            <ul id="tabs" className=" flex items-center gap-6">
                <li><FaBell className="text-grey hover:text-medium-blue" /></li>
                <li><AiFillMessage className="text-grey hover:text-medium-blue" /></li>
                <li className="flex items-center gap-2">
                    <GoGraph className="text-grey hover:text-medium-blue" />
                    <span className="text-[0.9rem]">Reports</span>
                </li>
                <li className="flex items-center gap-2">
                    <FaUserAlt className="text-grey hover:text-medium-blue" />
                    <span className="text-[0.9rem]">John Doe</span>
                </li>
            </ul>
        </nav>
    )
}

export default Header;