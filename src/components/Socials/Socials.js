import React, {Component} from 'react';
import classes from './Socials.module.scss';

const links = [
    {href: 'https://www.instagram.com/ujin.camera/', label: 'Instagram', target: '_blank'},
    {href: 'https://www.youtube.com/channel/UCaSnDLX8osDGiND5FtBQ_DQ', label: 'Youtube', target: '_blank'}
]

class Socials extends Component {
    renderLinks() {
        return links.map((link, index) => {
            return(
                <li key={ index }>
                    <a
                        href={ link.href }
                        target={ link.target }
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