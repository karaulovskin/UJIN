import React, {Component} from 'react'
import classes from './Logo.module.scss'
import {NavLink} from 'react-router-dom'

class Logo extends Component {
    render() {
        return (
            <div className={classes.Logo}>
                <NavLink
                    to='/'
                    exact
                >
                    8-Видео
                </NavLink>
            </div>
        )
    }
}

export default Logo