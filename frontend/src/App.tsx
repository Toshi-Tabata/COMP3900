import React from 'react';
import './App.css';
import Login from "./views/Login";

import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
import Register from "./views/Register";
import Dashboard from "./views/Dashboard";
import ForgotPassword from "./views/ForgotPassword";
import NavRoute from "./components/NavRoute";
import Friends from "./views/Friends";

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
            <Route path="/forgotpassword">
                <ForgotPassword/>
            </Route>
            <Route path="/" exact>
                <Login />
            </Route>

            <NavRoute path="/dashboard" Component={Dashboard} />
            <NavRoute path="/friends" Component={Friends} />

            <Route>
                404 Page not Found!
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
