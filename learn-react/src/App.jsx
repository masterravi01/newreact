import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Password from "./components/Password";
import Counter from "./components/Counter";
import ChangeColor from "./components/ChangeColor";
import Userdetails from "./components/Userdetails";
import CurrencyConvertor from "./components/CurrencyConvertor";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Password">Password</Link>
          </li>
          <li>
            <Link to="/Counter">Counter</Link>
          </li>
          <li>
            <Link to="/ChangeColor">ChangeColor</Link>
          </li>
          <li>
            <Link to="/Userdetails">Userdetails</Link>
          </li>
          <li>
            <Link to="/CurrencyConvertor">CurrencyConvertor</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/Password" element={<Password />} />
        <Route path="/Counter" element={<Counter />} />
        <Route path="/ChangeColor" element={<ChangeColor />} />
        <Route path="/Userdetails" element={<Userdetails />} />
        <Route path="/CurrencyConvertor" element={<CurrencyConvertor />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
