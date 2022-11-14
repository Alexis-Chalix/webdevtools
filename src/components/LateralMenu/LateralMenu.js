import SectionTitle from './SectionTitle'
import Element from './Element'

// Icons
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { TbGlass } from 'react-icons/tb'
import { GiHole } from 'react-icons/gi'

function LateralMenu({ isOpen }) {
    return (
        <section
            className="h-full border-r border-solid border-r-zinc-200 customTransition overflow-hidden select-none px-2 py-3"
            style={{ width: isOpen ? "240px" : "64px" }}
        >
            <div className='flex flex-col mb-3' >
                <SectionTitle isOpen={ isOpen } title={ "Général" } />
                <Element isOpen={ isOpen } type={ "Dashboard" } icon={ <MdOutlineSpaceDashboard /> } link='dashboard' />
            </div>
            <div className='flex flex-col' >
                <SectionTitle isOpen={ isOpen } title={ "Design" } />
                <Element isOpen={ isOpen } type={ "Glassmorphism" } icon={ <TbGlass /> } link='glassmorphism' />
                <Element isOpen={ isOpen } type={ "Neumorphism" } icon={ <GiHole /> } link='neumorphism' />
            </div>
        </section>
    );
}

export default LateralMenu;