import React, {Component} from 'react'
import classes from './Menu.module.scss'
import {NavLink} from 'react-router-dom'

const links = [
    {to: '/', label: 'Главная', exact: true},
    {to: '/projects', label: 'Проекты', exact: false},
    {to: '/team', label: 'Команда', exact: false},
    {to: '/contacts', label: 'Контакты', exact: false}
]

class Menu extends Component {

    renderLinks() {
        return links.map((link, index) => {
            return(
                <li key={ index }>
                    <NavLink
                        to={ link.to }
                        exact={ link.exact }
                        activeClassName={classes.active}
                    >
                        { link.label }
                    </NavLink>
                </li>
            )
        })
    }

    render() {
        return (
            <nav className={classes.Menu}>
                <ul>
                    { this.renderLinks() }
                </ul>
            </nav>
        )
    }
}

export default Menu