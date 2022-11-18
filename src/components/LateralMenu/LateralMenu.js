import SectionTitle from './SectionTitle'
import Element from './Element'

// Icons
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { TbGlass } from 'react-icons/tb'
import { GiHole } from 'react-icons/gi'
import { CgPassword } from 'react-icons/cg'

function LateralMenu({ isOpen }) {
    return (
        <section
            className="h-full border-r border-solid border-r-zinc-200 customTransition overflow-hidden select-none px-2 py-3"
            style={{ width: isOpen ? "300px" : "64px" }}
        >
            <div className='flex flex-col mb-3'>
                <SectionTitle isOpen={ isOpen } title={ "Général" } />
                <Element type={ "Dashboard" } icon={ <MdOutlineSpaceDashboard /> } link='dashboard' />
            </div>
            <div className='flex flex-col mb-3'>
                <SectionTitle isOpen={ isOpen } title={ "Design" } />
                <Element type={ "Glassmorphism" } icon={ <TbGlass /> } link='glassmorphism' />
                <Element type={ "Neumorphism" } icon={ <GiHole /> } link='neumorphism' />
            </div>
            <div className='flex flex-col mb-3'>
                <SectionTitle isOpen={ isOpen } title={ "Tools" } />
                <Element type={ "Password Generator" } icon={ <CgPassword /> } link='password-generator' />
            </div>
        </section>
    );
}

export default LateralMenu;