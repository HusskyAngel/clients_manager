import Admin from './admin/Admin';
import Login from './login/Login';

import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/admin" element={<Admin/>}/>
    </Routes>
  )
}

export default App
