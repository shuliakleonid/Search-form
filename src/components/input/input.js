import React from 'react';
import style from './style.css'

export const Input = ({placeholder,...rest}) => <input type="text" className='input-field' placeholder={placeholder} {...rest}/>
