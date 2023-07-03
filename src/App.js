import Layout from "./Components/Layout";
import Homepage from "./Components/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}> 
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Homepage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
