import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages/Components
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Show from './pages/Show';

// App
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="pages">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/recipes" element={<Recipes />} />
                        <Route path="/show" element={<Show />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
