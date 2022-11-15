import {FaFire, FaHandHoldingHeart} from "react-icons/fa";

function GlassPanes({ settings }) {
    return (
        <>
            <div
                className='w-32 h-32 rounded-full border border-solid border-gray-300 border-opacity-30 customTransition absolute top-28 right-44 flex justify-center items-center rotate-[30deg]'
                style={{
                    backgroundColor: settings.panelColor + parseInt(settings.transparency).toString(16),
                    backdropFilter: `blur(${settings.blur}px)`,
                    boxShadow: `1px 4px ${settings.shadowWidth}px 0 rgba(0, 0, 0, ${settings.shadowOpacity})`
                }}
            ><FaFire className='text-7xl' /></div>

            <div
                className='w-32 h-32 rounded-full border border-solid border-gray-300 border-opacity-30 customTransition absolute bottom-32 left-10 flex justify-center items-center'
                style={{
                    backgroundColor: settings.panelColor + parseInt(settings.transparency).toString(16),
                    backdropFilter: `blur(${settings.blur}px)`,
                    boxShadow: `1px 4px ${settings.shadowWidth}px 0 rgba(0, 0, 0, ${settings.shadowOpacity})`
                }}
            ><FaHandHoldingHeart className='text-7xl' /></div>

            <div
                className='w-96 h-64 rounded-lg border border-solid border-gray-300 border-opacity-30 flex flex-col items-center justify-between px-12 py-20 customTransition'
                style={{
                    backgroundColor: settings.panelColor + parseInt(settings.transparency).toString(16),
                    backdropFilter: `blur(${settings.blur}px)`,
                    boxShadow: `1px 4px ${settings.shadowWidth}px 0 rgba(0, 0, 0, ${settings.shadowOpacity})`
                }}
            >
                <h2 className='text-center font-extrabold text-4xl'>GLASSMORPHISM<br/>GENERATOR</h2>
            </div>
        </>
    )
}

export default GlassPanes;