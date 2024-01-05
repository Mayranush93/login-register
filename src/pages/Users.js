import React from 'react';
import Wrapper from "../components/Wrapper";
import {Link} from "react-router-dom";

function Users(props) {
    return (
        <Wrapper>
            <Link to={'/logout'}>Logout</Link>
            hello User
        </Wrapper>
    );
}

export default Users;