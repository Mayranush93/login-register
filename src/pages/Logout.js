import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import useLocalStorage from "../helpers/useLocalStorage";

function Logout(props) {
    const navigate = useNavigate();
    const [, setToken] = useLocalStorage('token');
    useEffect(() => {
        setToken('');
        navigate('/login');
    })
    return null;
}

export default Logout;