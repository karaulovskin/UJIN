import React from 'react';
import classes from './Textarea.module.css';

const Textarea = props => {
    const cls = [classes.Textarea]

    return (
        <div className={classes.Textarea}>
            <label>
                <textarea
                    placeholder={props.label}
                    onChange={props.onChange}
                >
                    {props.chidren}
                </textarea>
            </label>
        </div>
    )
}

export default Textarea