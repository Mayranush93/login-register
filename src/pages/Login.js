import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import useLocalStorage from "../helpers/useLocalStorage";
import WrapperLogout from "../components/WrapperLogout";

function Login(props) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({});
    const [, setToken] = useLocalStorage('token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {data} = await axios.post(`https://cors-anywhere.herokuapp.com/http://restapi.adequateshop.com/api/authaccount/login/`, {
            "email": email,
            "password": password
        }).catch(e => e.response);
        if (data.message !== "success") {
            setError({message: data.message})
        } else {
            setToken(data.data.Token)
            navigate('/')
        }

    }

    return (
        <WrapperLogout>
            <form onSubmit={handleSubmit}>
                {error.message ? <h1>{error.message}</h1> : null}
                <div>
                    <label htmlFor={'email'}>Email</label>
                    <input type="email"
                           value={email}
                           id={'email'}
                           onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor={'password'}>Password</label>
                    <input type="password"
                           id={'password'}
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button type={'submit'}>Login</button>
            </form>

            <Link to={'/register'}>Register</Link>
        </WrapperLogout>
    );
}

export default Login;