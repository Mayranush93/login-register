import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Users from "./pages/Users";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Logout from "./pages/Logout";
function App(props) {
    return (
        <BrowserRouter>
          <Routes>
            <Route path={'/'} element={<Users/>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/register'} element={<Register/>}/>
            <Route path={'/logout'} element={<Logout/>}/>
          </Routes>
        </BrowserRouter>
    );
}

export default App;