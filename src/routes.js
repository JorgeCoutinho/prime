import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './pages/Home'
import Filme from './pages/filme'
import Header  from "./components/Header";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header/> 
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:id" element={<Filme />} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;