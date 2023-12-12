import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './pages/Home'
import Not from './pages/Not'
import Intro from './pages/Intro'
import Contact from './pages/Contact'
import Games from "./pages/Games";
import Port from "./pages/Port";

import lenis from "./utils/lenis.js";
import link from "./utils/link.js";

const App = () => {
    useEffect(() => {
        lenis();
        link();
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/intro' element={<Intro />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/games' element={<Games />} />
                <Route path='/port' element={<Port />} />
                <Route path='*' element={<Not />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;