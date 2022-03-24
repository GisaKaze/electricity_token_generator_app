import "./App.css";
import { Link, Route, Routes } from 'react-router-dom'
import BuyElectricity from "./pages/BuyElectricty";
import LoadElectricty from "./pages/LoadElectricty";
import Check from "./pages/Check";

const Home = () => {
    return <div>
        <h1>
            Welcome to Electricty Token Selling App
        </h1>
    </div>
}

const NotFound = () => (
    <div>
        <h1 className="text-6xl font-bold text-purple-800">404 - Not found</h1>
    </div>
)


function App() {
    
    return (
        <div>
            <div className="flex px-12 py-5 shadow-lg">
                <div className="px-4 cursor-pointer hover:underline"><Link to="/"> Home </Link></div>
                <div className="px-4 cursor-pointer hover:underline"><Link to="/electricity/buy"> Buy Electricty </Link></div>
                <div className="px-4 cursor-pointer hover:underline"><Link to="/electricity/load"> Load Electricty </Link></div>
                <div className="px-4 cursor-pointer hover:underline"><Link to="/electricity/check"> Check electricty </Link></div>
            </div>
            <div className="h-[90vh] flex justify-center items-center">
                <Routes>
                    <Route path="/" exact element={<Home/>}> </Route>
                    <Route path="/electricity/buy" element={<BuyElectricity/>}> </Route>
                    <Route path="/electricity/load" element={<LoadElectricty/>}> </Route>
                    <Route path="/electricity/check" element={<Check/>}> </Route>
                    <Route path="*" element={<NotFound/>}>ddd</Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;
