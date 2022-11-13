import { MdManageSearch } from "react-icons/md";

function Header({ toggleLateral, isOpen }) {
    function changeLateralMenu() {
        toggleLateral();
    }

    return (
        <header className='h-[60px] bg-white flex py-2 px-6 flex items-center shadow-header'>
            <div
                className='w-8 h-8 mx-4 my-1 flex flex-col cursor-pointer customTransition justify-evenly gap-1.5'
                style={{ transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)' }}
                onClick={ changeLateralMenu }>
                <div className='h-0.5 w-full bg-black customTransition' style={{ translate: isOpen ? '0 0' : '0 5px' }}></div>
                <div className='h-0.5 w-full bg-black customTransition' style={{ opacity: isOpen ? '1' : '0' }}></div>
                <div className='h-0.5 w-full bg-black customTransition' style={{ translate: isOpen ? '0 0' : '0 -5px' }}></div>
            </div>
            <div>
                <h1 className='text-2xl font-extrabold ml-4 select-none'>WebDevTools</h1>
            </div>
            <div className='flex relative'>
                <input type={"search"} className="ml-16 w-[750px] bg-gray-100 rounded py-2 pl-12 pr-2 customTransition focus:shadow-formInput" placeholder="Rechercher..."/>
                <MdManageSearch className='text-3xl absolute left-[74px] top-[5px]' />
            </div>
        </header>
    );
}

export default Header;