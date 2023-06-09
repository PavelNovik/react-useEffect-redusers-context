import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
  return (
    <div
      className={`${styles.control} ${
        // passwordIsValid === false ? styles.invalid : ''
        props.isValid === false ? styles.invalid : ''
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        value={props.value}
        onBlur={props.onBlur}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Input;
