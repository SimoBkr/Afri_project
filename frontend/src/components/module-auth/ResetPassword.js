import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './Authentification.css';
import axios from 'axios';
import { message } from 'antd';

const ResetPassword = () => {

    const history = useHistory();
    /* const password_token = localStorage.getItem('password-token'); */
    const { token } = useParams();
    console.log(token);

    useEffect(() => {
        axios.put(`http://localhost:9000/api/user/auth/reset?token=${token}`)
             .then(res =>{
                 console.log(res.data);
                 message.success("the updated password is sent to your E-mail",5)
                 history.push('/sign-in');
             })
             .catch(err =>{
                 console.log(err);
             })
    }, [])

    return (
        <>
            <div>

            </div>
        </>
    );
}

export default ResetPassword;