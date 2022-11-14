import { useState } from "react";
import Result from '../../components/Design/Glassmorphism/Result';
import Settings from '../../components/Design/Glassmorphism/Settings'
import '../../components/Design/Glassmorphism/Glassmorphism.css';

function Glassmorphism() {
    const [resultSettings, setResultSettings] = useState({
        backgroundColor: '#e4e4e7',
        textColor: '#475569',
        panelColor: '#1f6bff',
        transparency: 0.5,
        blur: 10,
        shadowOpacity: 0.25,
        shadowWidth: 5
    })

    function changeSettings(type, value) {
        setResultSettings({
            ...resultSettings,
            [type]: value
        })
    }

    return (
        <div className='flex items-center h-full justify-around'>
            <Result settings={ resultSettings } />
            <Settings settings={ resultSettings } changeSettings={ changeSettings } />
        </div>
    )
}

export default Glassmorphism;