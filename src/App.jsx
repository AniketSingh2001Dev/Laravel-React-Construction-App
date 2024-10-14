import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import './assets/scss/styles.scss';

const App = () => {
    return (
        <>
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/projects' element={<Projects />} />
                    <Route path='/blogs' element={<Blogs />} />
                </Routes>
            </div>
        </>
    );
};

export default App;