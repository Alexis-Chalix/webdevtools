import {useEffect, useState} from "react";
import Result from '../../components/Design/Glassmorphism/Result';
import Settings from '../../components/Design/Glassmorphism/Settings'
import '../../components/Design/Glassmorphism/Glassmorphism.css';

function Glassmorphism() {
    const [resultSettings, setResultSettings] = useState({
        backgroundColor: '#1f6bff',
        textColor: '#ffffff',
        panelColor: '#ffffff',
        transparency: 30,
        blur: 2.55,
        shadowOpacity: 0.25,
        shadowWidth: 5
    })

    function changeSettings(type, value) {
        if (type === "transparency") console.log(parseInt(value).toString(16));

        setResultSettings({
            ...resultSettings,
            [type]: value
        })
    }

    useEffect(() => {
        document.title = "WebDevTools - Glassmorphism";
    });

    return (
        <div className='flex items-center h-full justify-around'>
            <Result settings={ resultSettings } />
            <Settings settings={ resultSettings } changeSettings={ changeSettings } />
        </div>
    )
}

export default Glassmorphism;