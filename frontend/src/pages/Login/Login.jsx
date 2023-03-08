import React, {useState} from 'react';
import axios from 'axios'
import s from './Login.module.scss';
import Layout from '../../components/Layout/Layout';
import MyButton from '../../components/MUI/MyButton/MyButton';
import MyInput from '../../components/MUI/MyInput/MyInput';
import {MailOutlined, LockOutlined, EyeOutlined } from '@ant-design/icons';
import Loading from '../../components/Loading/Loading';


function Login() {
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })

  const BASE_URL ='http://localhost:8080'
  
  const postDataUser = async () => {
    try{
       setIsLoading(true);
       await axios
      .post(BASE_URL + '/login', userData)
      .then((res) => {
        console.log(res.data);
        const token = res.data.token;
        localStorage.setItem('token', token);
        console.log(res.data.message)
      })
    } catch (error){
        setMessage(error.response.data.error);
        console.log(error.response.data.error)
    } 
    setIsLoading(false);
  }

    return (
        <Layout>

        <div className={s.login}>
        {isLoading ? (
            <Loading/>
        ) : (
            <> 
            <h1>Вход</h1>
                <MyInput type="email" placeholder="E-mail"
                prefix={<MailOutlined />}
                value={userData.email}
                        onChange={(e) => {
                            setUserData(
                                {
                                    ...userData,
                                    email: e.target.value
                                })
                        }}
                />
            
                <MyInput type="password" placeholder="Пароль"
                prefix={<LockOutlined />}
                suffix={<EyeOutlined />}
                    value={userData.password}
                        onChange={(e) => {
                            setUserData(
                                {
                                    ...userData,
                                    password: e.target.value
                                })
                        }}
                />

              {!!message.length && <span className={s.message}>{message}</span>}
              {!!userData.email.length &&
              !!userData.password.length ? (
                <MyButton onClick={postDataUser} style={{height: 50, background: '#000000', color: '#FFFFFF'}}>Войти</MyButton>
              ) : (
                <MyButton onClick={postDataUser} disabled style={{height: 50, background: '#000000', color: '#FFFFFF'}}>Войти</MyButton>
              )}
            </>
        )}
                
        </div>
        </Layout>
    );
};

export default Login;