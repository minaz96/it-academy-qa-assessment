import React from 'react';
import s from './Footer.module.scss';
import {Link, useLocation} from 'react-router-dom'


const Footer = () => {
    let location = useLocation()
   
    return (
        <div className={s.footer}>
            {location.pathname == "/register" ? (
                <>
                <Link to={"/login"}>
                    <p>Уже есть аккаунт?</p> Войти 
                </Link>
                </>    
            ) : (
                <>
                <Link to={"/register"}>
                    <p>Еще нет аккаунта?</p> Зарегистрироваться
                </Link>  
                </>   
            )}
        </div>
    );
};

export default Footer;