import { NavLink } from "react-router-dom";

function Element({ isOpen, type, icon, link }) {
    return (
        <NavLink
            to={ link }
            className={({ isActive }) =>
                'px-2 py-1 flex cursor-pointer items-center rounded customTransition !duration-200 hover:bg-zinc-200 ' + (isActive ? "text-blue-600 bg-blue-100 hover:bg-blue-200" : "text-slate-600")
            }
        >
            <div className='text-3xl text-center customTransition'>{ icon }</div>
            <p className='customTransition ml-1 text-ellipsis overflow-hidden whitespace-nowrap' style={{ opacity: isOpen ? '1' : '1' }}>{ type }</p>
        </NavLink>
    )
}

export default Element;