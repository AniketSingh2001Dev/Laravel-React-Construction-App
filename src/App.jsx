import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import './assets/scss/styles.scss';
import Projects from "./components/Projects";

const App = () => {
    return (
        <>
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/projects' element={<Projects />} />
                </Routes>
            </div>
        </>
    );
};

export default App;