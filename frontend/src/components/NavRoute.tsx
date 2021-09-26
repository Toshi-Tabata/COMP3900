import React, { FC } from 'react'
import { useHistory } from 'react-router-dom';
import {
    Route,
} from 'react-router-dom';
import Navbar from "./Navbar";

interface Props {
    path: string;
    Component: React.ComponentType;
}

// Wrapper for React Router. Allows the navbar to appear on certain pages and not others
const NavRoute: FC<Props> = ( {path, Component} ) => {
    return(
        <Route path={path}>
            <Navbar />
            <Component/>
        </Route>
    )
}

export default NavRoute;