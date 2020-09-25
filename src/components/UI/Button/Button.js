import React from 'react';
import classes from './Button.module.scss';

const Button = props => {
    const cls = [
        classes.Button,
        classes[props.type]
    ];

    return (
        <button
            className={classes.Button}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button