import React from 'react';
import './style.scss'

const Input = ({placeholder, ...rest}) => <input className="input-field test" placeholder={placeholder} {...rest}/>


export default Input;
