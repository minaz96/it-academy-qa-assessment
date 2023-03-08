import React, {useState, useEffect} from "react";
import s from "./Modal.module.scss";
import classNames from "classnames";

import MyInput from "../MUI/MyInput/MyInput";
import MyButton from "../MUI/MyButton/MyButton";
import axios from "axios";

const Modal = ({active, setActive}) => {
  // const [message, setMessage] = useState("");
  // const [isLoading, setIsLoading] = useState(false);

  // const BASE_URL ='http://localhost:8080'
  

  // useEffect(()=>{
  //     patchUser();
      
  // },[]);

  //   const patchUser = async () => {
  //         const token = localStorage.getItem('token')
  //         try{
  //            setIsLoading(true);
  //            await axios
  //            .put(BASE_URL + '/profile', {user})
  //            .then((res) => {
  //             console.log(res.data)
  //             setUser(res.data.data)
  //         });
  //           setMessage("");
            
  //         } catch (error){
  //             setMessage(error.response.data.error);
  //             console.log(error.response.data.error)
  //             setUser({
  //               username: '',
  //               email: '',
  //               about: '',
  //               avatar: ''
  //         })
  //         } 
  //         setIsLoading(false);
  //       };

  // console.log(user);

    return (
      <div
        className={active ? classNames(s.modal) : classNames(s.modal, s.active)}
      >
        <div className={s.modal_content}>
          <h1>Редактировать профиль</h1>
          <form>
            <label htmlFor="text">
              Имя
              <MyInput/>
            </label>
            <label htmlFor="email">
              E-mail
              <MyInput/>
            </label>
            <label htmlFor="url">
            Url аватарки
              <MyInput/>
            </label>
           <label htmlFor="">
           Описание <br />
           <textarea name="" id="" cols="31" rows="2"></textarea>
           </label>
           <div className={s.buttons}>
           <MyButton onClick={() => setActive(false)}>Отмена</MyButton>
           <MyButton style={{height: 50, background: '#000000', color: '#FFFFFF'}}>Сохранить</MyButton>
           </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Modal;