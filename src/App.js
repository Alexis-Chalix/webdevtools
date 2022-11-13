import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import LateralMenu from './components/LateralMenu/LateralMenu';

    function App() {
        const [lateralIsOpen, setLateralIsOpen] = useState(true);

        return (
        <div className="App bg-gray-100 h-screen">
            <Header toggleLateral={() => setLateralIsOpen((prev) => !prev)} isOpen={ lateralIsOpen } />
            <div className='h-[calc(100%-60px)] w-full flex'>
                <LateralMenu isOpen={ lateralIsOpen } />
            </div>
        </div>
      );
    }

export default App;
