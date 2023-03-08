import React, {useEffect, useState} from 'react';
import s from './Profile.module.scss';
import Cover from '../../assets/cover.png'
import Avatar from '../../assets/profile_pic.png'
import Header from '../../components/Header/Header';
import IconButton from '../../components/MUI/IconButton/IconButton';
import Edit from '../../assets/edit.png'
import Exit from '../../assets/logout.png'
import Modal from '../../components/Modal/Modal';
import axios from "axios"

const Profile = () => {
    const [active, setActive] = useState(false);
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({
        id: '',
        username: '',
        email: '',
        avatar: '',
        about: ''
    })

    const BASE_URL ='http://localhost:8080'
    

    useEffect(()=>{
        getUser();
        
    },[]);

      const getUser = async () => {
            const token = localStorage.getItem('token')
            try{
               setIsLoading(true);
               await axios
              .get(BASE_URL + '/profile', {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
              })
              .then((res) => {
                console.log(res.data)
                setUser(res.data.data)
            });
              setMessage("");
              
            } catch (error){
                setMessage(error.response.data.error);
                console.log(error.response.data.error)
                setUser({
                id: '',
                username: '',
                avatar: '',
                about: ''
            })
            } 
            setIsLoading(false);
          };

    console.log(user);

    return (
            <div className={s.profile_container}>
                <Header/>
                <div className={s.profile_body}>
                <img src={Cover} alt="cover" />
                <div className={s.profile_content}>
                    <span className={s.avatar}>
                        <img src={Avatar} alt="avatar" />
                    </span>

                    <div className={s.upper_container}>
                        <div className={s.user_data}>
                            <h1>{user?.username}</h1>
                            <p>{user?.email}</p>
                        </div>
                        <div className={s.edit_btn}>
                        <IconButton 
                            onClick={() => setActive(true)}
                            style={{ maxWidth: 200 }}>
                            <span className={s.edit_img}>
                                <img src={Edit} alt="edit" />
                            </span>
                            Редактировать
                        </IconButton>
                        </div> 
                        {active && <Modal/>}

                    </div>
                    <div className={s.text}>
                        <p>Здесь может быть информация "о тебе"</p>
                        {/* <p>Рыбатекст используется дизайнерами, 
                        проектировщиками и фронтендерами, когда 
                        нужно быстро заполнить макеты или прототипы 
                        содержимым. Это тестовый контент, который 
                        не должен нести никакого смысла, лишь 
                        показать наличие самого текста или 
                        продемонстрировать типографику в деле.</p> */}
                    </div>
                    
                    <div className={s.exit_btn}>
                            <IconButton
                                style={{ maxWidth: 120, marginTop: 60 }}>
                                <span className={s.exit_img}>
                                    <img src={Exit} alt="exit" />
                                </span>
                                Выйти
                            </IconButton>
                            
                    </div>
                   

                </div>
                </div>
            </div> 
    );
};

export default Profile;