import SectionTitle from './SectionTitle'
import Element from './Element'

// Icons
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { TbGlass } from 'react-icons/tb'

function LateralMenu({ isOpen }) {
    return (
        <section
            className="h-full border-r border-solid border-r-zinc-200 customTransition overflow-hidden select-none px-2 py-3"
            style={{ width: isOpen ? "240px" : "64px" }}
        >
            <div className='flex flex-col mb-3' >
                <SectionTitle isOpen={ isOpen } title={ "Général" } />
                <Element isOpen={ isOpen } type={ "Tableau de bord" } icon={ <MdOutlineSpaceDashboard /> } link='dashboard' />
                <Element isOpen={ isOpen } type={ "Tableau de booooooord" } icon={ <MdOutlineSpaceDashboard /> } link='dashboard-2' />
            </div>
            <div className='flex flex-col' >
                <SectionTitle isOpen={ isOpen } title={ "Design" } />
                <Element isOpen={ isOpen } type={ "Glassmorphism" } icon={ <TbGlass /> } link='glassmorphism' />
            </div>
        </section>
    );
}

export default LateralMenu;