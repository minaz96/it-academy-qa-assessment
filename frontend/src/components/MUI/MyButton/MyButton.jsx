import React from 'react';
import s from './MyButton.module.scss';

const MyButton = ({children, ...props}) => {
    return (
        <div>
            <button {...props} className={s.my_btn}>
                {children}
            </button>
        </div>
    );
};

export default MyButton;