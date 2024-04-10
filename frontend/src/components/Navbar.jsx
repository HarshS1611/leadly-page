import { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Navbar() {

    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [solutionDropdown, setSolutionDropdownOpen] = useState(false)

    const [developDropdown, setDevelopDropdownOpen] = useState(false)

    const [resourcesDropdown, setResourcesDropdownOpen] = useState(false)

    const [isTop, setIsTop] = useState(true); // Changed to isTop for clarity

    // Define the calculateTopValue function to return a boolean
    function calculateTopValue(scrollTop) {
        // Return true if the user is at the top of the page, false otherwise
        return scrollTop === 0;
    }

    // Add an event listener to calculate and update the 'isTop' value while scrolling
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            // Use the calculateTopValue function to calculate the 'isTop' value
            const isTop = calculateTopValue(scrollTop);
            // Update the 'isTop' value
            setIsTop(isTop);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
<div className={`fixed w-full py-5 flex justify-center ${isTop ? 'bg-transparent' : 'bg-white'}`}>          <div className="mx-auto sm:px-6 lg:px-20">
            <div className="relative flex items-center gap-10 mt-2 justify-between">
                <div className="flex-shrink-0">
                    <img className="h-12 w-44" src="https://cdn1.storehippo.com/s/5667e7d63086b2e718049ad9/ms.settings/521c4d7548c284890e000001/594a155440e9fb9e592f2ba9-240x240.png" alt="Logo" />
                </div>
                <div className="flex items-center px-2 lg:px-0 xl:w-full">

                    <div className="hidden lg:block lg:ml-6">
                        <div className="flex gap-2 text-lg  items-center mt-2 ml-5 space-x-4">
                            <div className="relative"><button className="flex items-center" onClick={() => setSolutionDropdownOpen(!solutionDropdown)}>Solutions
                                <div className=" flex w-6 items-center justify-center">
                                    <IoIosArrowDown className="text-gray-600 group-open:rotate-180" />
                                </div></button>
                                {solutionDropdown && <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                                </div>}
                            </div>
                            <div className="relative"><button className="flex gap-1 items-center" onClick={() => setDevelopDropdownOpen(!developDropdown)}>Develop
                                <div className=" flex w-6 items-center justify-start">
                                    <IoIosArrowDown className="text-gray-600 group-open:rotate-180" />
                                </div></button>
                                {developDropdown && <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                                </div>}
                            </div>
                            <a href="#" >Examples</a>
                            <a href="#">Pricing</a>
                            <div className="relative"><button className="flex items-center" onClick={() => setResourcesDropdownOpen(!resourcesDropdown)}>Resources
                                <div className=" flex w-6 items-center justify-center">
                                    <IoIosArrowDown className="text-gray-600 group-open:rotate-180" />
                                </div></button>
                                {resourcesDropdown && <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="flex-1 flex items-center justify-center px-2 lg:ml-6 lg:justify-end">
                        <div className="max-w-lg w-full lg:max-w-xs">
                            <label htmlFor="search" className="sr-only">Search</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.8 3.4l4.8 4.8-1.4 1.4-4.8-4.8 4.8-4.8z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <input id="search" className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search" type="search" name="search" />
                            </div>
                        </div>
                    </div> */}
                <div className="flex lg:hidden">
                    <button type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                        <span className="sr-only">Open main menu</span>

                    </button>
                </div>
                <div className="hidden lg:block ">
                    <div className="flex items-center">
                        <div className="w-full">
                            <button className="bg-[#7db434] text-white w-max py-2 rounded-full px-4 font-semibold">CONTACT US</button>
                        </div>
                        <div className="ml-3 relative">
                            <div>
                                <button type="button" onClick={() => setDropdownOpen(!dropdownOpen)} className="" id="user-menu" aria-expanded="false" aria-haspopup="true">
                                    <span class="sr-only">Open main menu</span>
                                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                                    </svg>
                                </button>
                            </div>
                            {dropdownOpen && <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
}