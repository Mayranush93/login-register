import React from 'react';
import {Navigate} from 'react-router-dom';
import useLocalStorage from "../helpers/useLocalStorage";

function Wrapper(props) {
    const [token] = useLocalStorage('token', null);

    if (!token){
        return  <Navigate to={'/login'}/>
    }
    return (
        <>
            {props.children}
        </>
    );
}

export default Wrapper;