import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './views/Home/Home';

export default function App() {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}