import { useState } from 'react'
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
const Nav = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <>
            <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
                <ul className='md:flex gap-4 hidden items-center'>
                    <li className='cursor-pointer'>Home</li>
                    <li className='cursor-pointer'>Company</li>
                    <li className='cursor-pointer'>Resources</li>
                    <li className='cursor-pointer'>About</li>
                    <li className='cursor-pointer'>Contact</li>
                    <li><a href="https://github.com/jasper1902/data-finance"><FaGithubSquare size={30}/></a></li>
                </ul>

                <div onClick={handleNav} className='cursor-pointer block md:hidden' draggable>
                    {!nav ? <HiMenu size={20} /> : <AiOutlineClose size={20} />}
                </div>

                <div className={`${!nav ? "fixed left-0 top-0 w-[30%] border-r h-full border-r-gray-900 bg-[#000300] ease-in-out duration-500" : "fixed left-[-100%]"} md:hidden`}>
                    <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
                    <ul className='uppercase p-4'>
                        <li className='cursor-pointer p-4 border-b border-gray-600'>Home</li>
                        <li className='cursor-pointer p-4 border-b border-gray-600'>Company</li>
                        <li className='cursor-pointer p-4 border-b border-gray-600'>Resources</li>
                        <li className='cursor-pointer p-4 border-b border-gray-600'>About</li>
                        <li className='cursor-pointer p-4 border-b border-gray-600'>Contact</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Nav