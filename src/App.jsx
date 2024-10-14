import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import './assets/scss/styles.scss';

const App = () => {
    return (
        <>
            <div>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </div>
        </>
    );
};

export default App;