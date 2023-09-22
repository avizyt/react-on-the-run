import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div
            className={`fixed inset-y-0 left-0 w-64 bg-gray-800 text-white h-full ${
                isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out`}>
            <div className='p-4 flex justify-between items-center'>
                <div className='text-2xl font-bold'>Sidebar</div>
                <div
                    className='cursor-pointer md:hidden'
                    onClick={toggleSidebar}>
                    {isOpen ? (
                        <FaTimes className='text-2xl' />
                    ) : (
                        <FaBars className='text-2xl' />
                    )}
                </div>
            </div>
            <nav className='py-4'>
                <ul>
                    <li className='px-4 py-2 hover:bg-gray-600'>
                        <a href='#'>Home</a>
                    </li>
                    <li className='px-4 py-2 hover:bg-gray-600'>
                        <a href='#'>About</a>
                    </li>
                    <li className='px-4 py-2 hover:bg-gray-600'>
                        <a href='#'>Services</a>
                    </li>
                    <li className='px-4 py-2 hover:bg-gray-600'>
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
