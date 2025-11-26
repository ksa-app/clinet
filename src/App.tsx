import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Visa from "./pages/Visa";
import Candidate from "./pages/Candidate";
import './App.css';

function App(){
    return(
        <>
            <nav className="styles" >
                <Link to="/">Home</Link>
                <Link to="/candidate">Canidate</Link>
                <Link to="/visa">Visa</Link>
            </nav>
            <Routes>
                <Route  path="/" element={<Home />}/>
                <Route  path="/candidate" element={<Candidate />}/>
                <Route  path="/visa" element={<Visa />}/>
            </Routes>
        </>
    );
}
export default App;