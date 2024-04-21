import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Pages/Components
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Show from './pages/Show';
import Login from './pages/Login';
import SignupForm from './pages/Signup';
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
                        <Route path="/login" element={<Login />} />
                        <Route path="/signup" element={<SignupForm />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
