import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className='flex justify-between items-center bg-red-800 p-3 font-bold'>
            <div className='ml-10 text-[20px]'>
                <span className='text-white'>fetch</span>
                <span className='text-emerald-400'>Movie</span>
            </div>
            <ul className='flex gap-10 mr-14 text-white'>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `cursor-pointer hover:text-blue-500 relative inline-block 
                 after:content-[""] after:absolute after:left-0 after:bottom-0
                 after:h-[2.5px] after:w-0 after:bg-blue-500 after:transition-all 
                 after:duration-300 hover:after:w-[70%] ${isActive ? "text-blue-600" : ""}`
                        }
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/favorite"
                        className={({ isActive }) =>
                            `cursor-pointer hover:text-blue-500 relative inline-block 
                 after:content-[""] after:absolute after:left-0 after:bottom-0
                 after:h-[2.5px] after:w-0 after:bg-blue-500 after:transition-all 
                 after:duration-300 hover:after:w-[70%] ${isActive ? "text-blue-600" : ""}`
                        }
                    >
                        Favorites
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}
