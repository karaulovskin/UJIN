import React, {Component} from 'react';
import classes from './ContactsItem.module.css';

const links = [
    {href: 'tel:89514536212', label: '8 951 453 62 12', title: 'Телефон'},
    {href: 'mailto:snpk88@bk.ru', label: 'snpk88@bk.ru', title: 'Email'}
]

export default class ContactsItem extends Component {
    renderLinks() {
        return links.map((link, index) => {
            return(
                <li key={ index }>
                    <div>
                        { link.title }
                    </div>
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
            <div className={classes.ContactsItem}>
                <ul>
                    { this.renderLinks() }
                </ul>
            </div>
        )
    }
}