import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import WrapperLogout from "../components/WrapperLogout";

function Register(props) {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState({})
    // console.log(1, formData);

    const handleChange = (e, key) => {
        setFormData({
            ...formData,
            [key]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {data} = await axios.post(`https://cors-anywhere.herokuapp.com/http://restapi.adequateshop.com/api/authaccount/registration/`, formData).catch(e => e.response);
        setFormData(data);
        // console.log(data)
        if (data.message !== 'success') {
            setError({
                name: data.ModelState && data.ModelState['User.name'] ? data.ModelState['User.name'][0] : null,
                email: data.ModelState && data.ModelState['User.email'] ? data.ModelState['User.email'][0] : null,
                password: data.ModelState && data.ModelState['User.password'] ? data.ModelState['User.password'][0] : null,
                message: data.message
            })
        } else {
            navigate('/login')
        }
    }
    return (
        <WrapperLogout>
            <form onSubmit={handleSubmit}>
                {error.message ? <h1>{error.message}</h1> : null}
                <div>
                    {error.name ? <h1>{error.name}</h1> : null}
                    <label htmlFor={'name'}>Name</label>
                    <input type="text"
                           id={'name'}
                           value={formData.name}
                           onChange={(e) => handleChange(e, 'name')}/>
                </div>
                <div>
                    {error.email ? <h1>{error.email}</h1> : null}
                    <label htmlFor={'email'}>Email</label>
                    <input type="email"
                           value={formData.email}
                           id={'email'}
                           onChange={(e) => handleChange(e, 'email')}/>
                </div>
                <div>
                    {error.password ? <h1>{error.password}</h1> : null}
                    <label htmlFor={'password'}>Password</label>
                    <input type="password"
                           id={'password'}
                           value={formData.password}
                           onChange={(e) => handleChange(e, 'password')}/>
                </div>
                <button type={'submit'}>Register</button>
            </form>

            <Link to={'/login'}>Login</Link>
        </WrapperLogout>
    );
}

export default Register;