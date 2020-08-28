import React, {Component} from 'react'
import classes from './Socials.module.css'
import {NavLink} from 'react-router-dom'

const links = [
    {href: 'https://www.instagram.com/ujin.camera/', label: 'Instagram'},
    {href: 'https://www.youtube.com/channel/UCaSnDLX8osDGiND5FtBQ_DQ', label: 'Youtube'}
]

class Socials extends Component {

    renderLinks() {
        return links.map((link, index) => {
            return(
                <li key={ index }>
                    <a
                        href={ link.href }
                    >
                        { link.label }
                    </a>
                </li>
            )
        })
    }

    render() {
        return (
            <div className={classes.Socials}>
                <ul>
                    { this.renderLinks() }
                </ul>
            </div>
        )
    }
}

export default Socials