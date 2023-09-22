import { useState } from "react";
import { FaBars, FaRibbon, FaTimes } from "react-icons/fa";
import {
    FaBarsStaggered,
    FaAnglesRight,
    FaAnglesLeft,
    FaRightFromBracket,
} from "react-icons/fa6";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`fixed inset-y-0 left-0 w-64 bg-pallet1-lorange text-white h-full ${
                isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out`}>
            <div className='p-4 flex justify-between items-center'>
                <div className='text-2xl font-bold'>Sidebar</div>
                <div
                    className='cursor-pointer md:hidden'
                    onClick={toggleSidebar}>
                    {isOpen ? (
                        <FaAnglesLeft className='text-3xl' />
                    ) : (
                        <FaAnglesRight className='text-3xl' />
                    )}
                </div>
            </div>
            <nav className='py-4'>
                <ul>
                    <li className='px-4 py-2 hover:bg-slate-300'>
                        <a href='#'>Home</a>
                    </li>
                    <li className='px-4 py-2 hover:bg-slate-300'>
                        <a href='#'>About</a>
                    </li>
                    <li className='px-4 py-2 hover:bg-slate-300'>
                        <a href='#'>Services</a>
                    </li>
                    <li className='px-4 py-2 hover:bg-slate-300'>
                        <a href='#'>Contact</a>
                    </li>
                </ul>
            </nav>
            <div className='absolute bottom-0 w-full p-4'>
                <p className='text-center'>Powered by Tailwind CSS</p>
            </div>
        </div>
    );
};

export default Sidebar;
