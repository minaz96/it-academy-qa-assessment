import React from 'react';
import s from './Header.module.scss'
import Logo from '../../assets/logo.png'
import { useNavigate, useLocation } from 'react-router-dom';
import Avatar from '../../assets/profile_pic.png'

const Header = ({user}) => {
    const navigate = useNavigate()
    let location = useLocation()

    return (
        <div className={s.header}>
            {location.pathname == "/" ? (
                <>
                <div className={s.left_side}>
                    <img src={Logo} alt="logo" 
                    onClick={()=>navigate('/')} />
                    <p>Разрабатываем и запускаем <br /> 
                    сложные веб проекты</p>
                </div>
                
                <div className={s.right_side}>
                    <span>username</span>
                    <img src={Avatar} alt="avatar" />
                </div>
                </>
            ) : (
                <>
                <div className={s.left_side}>
                    <img src={Logo} alt="logo" 
                    onClick={()=>navigate('/login')} />
                    <p>Разрабатываем и запускаем <br /> 
                    сложные веб проекты</p>
                </div>
                
                <button className={s.btn} onClick = {()=>navigate('/login')}>Войти</button>
                </>

            )}
            

        </div>
    );
};

export default Header;