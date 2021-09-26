import React from 'react';
import './App.css';
import Login from "./components/Login";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";
import ForgotPassword from "./components/ForgotPassword";



function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/register">
                <Register/>
            </Route>
            <Route path="/dashboard">
                <Dashboard/>
            </Route>
            <Route path="/forgotpassword">
                <ForgotPassword/>
            </Route>
            <Route path="/" exact>
                <Login />
            </Route>
            <Route>
                404 Page not Found!
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
