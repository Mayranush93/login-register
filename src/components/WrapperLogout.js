import React from 'react';
import useLocalStorage from "../helpers/useLocalStorage";
import {Navigate} from "react-router-dom";

function WrapperLogout(props) {
    const [token] = useLocalStorage('token');

    if (token){
        return  <Navigate to={'/'}/>
    }
    return (
        <>
            {props.children}
        </>
    );
}

export default WrapperLogout;