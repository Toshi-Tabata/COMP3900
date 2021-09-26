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



function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/register">
                <Register/>
            </Route>u

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
