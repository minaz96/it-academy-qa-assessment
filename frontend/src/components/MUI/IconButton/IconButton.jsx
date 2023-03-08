import React from 'react';
import s from './IconButton.module.scss'

const IconButton = ({children, ...props}) => {
    return (
        <div>
            <button {...props} className={s.icon_button}>{children}</button>
        </div>
    );
};

export default IconButton;