import React, {useState} from 'react'
import s from './Registration.module.scss';
import axios from 'axios'
import MyButton from '../../components/MUI/MyButton/MyButton';
import MyInput from '../../components/MUI/MyInput/MyInput';
import Layout from '../../components/Layout/Layout';
import { UserOutlined, MailOutlined, LockOutlined, EyeOutlined } from '@ant-design/icons';
import Loading from '../../components/Loading/Loading';
import { useNavigate } from 'react-router-dom';

function Registration() {
    const navigate = useNavigate()
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: ''
    })

  const BASE_URL ='http://localhost:8080'
  
  const postDataUser = async () => {
    try{
       setIsLoading(true);
       await axios
      .post(BASE_URL + '/register', userData)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem('token', token);
        console.log(res.data.message)
      });
      setMessage("");
      navigate("/login")
    } catch (error){
        setMessage(error.response.data.error);
        setUserData({
          username: '',
          email: '',
          password: ''
        })
        console.log(error.response.data.error)
    } 
    setIsLoading(false);
  };

  return (
    <Layout>
        
       <div className={s.registration}>
        {isLoading ? (
            <Loading/>
        ) : (
            <>
             <h1>Регистрация</h1>
                <MyInput type="text" placeholder="Имя"
                prefix={<UserOutlined className="site-form-item-icon" />}
                value={userData.username}
                            onChange={(e) => {
                                setUserData(
                                    {
                                        ...userData,
                                        username: e.target.value
                                    })
                            }}
                />

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
              {!!userData.username.length &&
              !!userData.email.length &&
              !!userData.password.length ? (
                <MyButton onClick={postDataUser} style={{height: 50, background: '#000000', color: '#FFFFFF'}}>Создать аккаунт</MyButton>
              ) : (
                <MyButton onClick={postDataUser} disabled style={{height: 50, background: '#000000', color: '#FFFFFF'}}>Создать аккаунт</MyButton>
              )}
            </>
        )}
       
       </div>
 
    </Layout>
  );
}

export default Registration;
