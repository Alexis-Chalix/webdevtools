import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Pages and Components
import Header from './components/Header';
import LateralMenu from './components/LateralMenu/LateralMenu';
import Dashboard from './pages/Dashboard';
import Glassmorphism from "./pages/Design/Glassmorphism";
import Neumorphism from "./pages/Design/Neumorphism";

function App() {
    const [lateralIsOpen, setLateralIsOpen] = useState(true);

    return (
        <div className="App bg-gray-100 h-screen">
            <BrowserRouter>
                <Header toggleLateral={() => setLateralIsOpen((prev) => !prev)} isOpen={ lateralIsOpen } />
                <div className='h-[calc(100%-60px)] w-full flex'>
                    <LateralMenu isOpen={ lateralIsOpen } />
                    <section className='w-full'>
                        <Routes>
                            <Route path='/' element={<Dashboard />} />
                            <Route path='/dashboard' element={<Dashboard />} />
                            <Route path='/glassmorphism' element={ <Glassmorphism /> } />
                            <Route path='/neumorphism' element={ <Neumorphism /> } />
                        </Routes>
                    </section>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
