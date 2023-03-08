import React from 'react';
import s from './MyInput.module.scss'
import { Input } from 'antd';
import './MyInput.css';

const MyInput = ({...props}) => {
    return (
        <div className={s.my_input}>
            <Input {...props} />
        </div>
    );
};

export default MyInput;