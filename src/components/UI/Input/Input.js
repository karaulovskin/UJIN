import React from 'react';
import classes from './Input.module.css';

const Input = props => {
    const inputType = props.type || 'text';
    const cls = [classes.Input]

    return (
        <div className={classes.Input}>
            <label>
                <input
                    type={inputType}
                    placeholder={props.label}
                    value={props.value}
                    onChange={props.onChange}
                />
            </label>
            <span>{ props.errorMessage }</span>
        </div>
    )
}

export default Input