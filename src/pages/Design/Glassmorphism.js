import { useState } from "react";
import Result from '../../components/Design/Glassmorphism/Result';
import Settings from '../../components/Design/Glassmorphism/Settings'

function Glassmorphism() {
    const [resultSettings, setResultSettings] = useState({
        backgroundColor: '#1f6bff',
        textColor: '#ffffff',
        panelColor: '#ebf2fA',
        transparency: 50,
        blur: 10,
        shadowOpacity: 1,
        shadowWidth: 1
    })

    return (
        <div className='flex items-center h-full justify-around'>
            <Result settings={ resultSettings } />
            <Settings settings={ resultSettings } />
        </div>
    )
}

export default Glassmorphism;