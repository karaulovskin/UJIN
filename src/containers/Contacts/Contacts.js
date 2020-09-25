import React, {Component} from 'react';
import classes from './Contacts.module.scss';
import ContactsItem from '../../components/ContactsItem/ContactsItem';
import Callback from '../../components/Callback/Callback';

export default class Contacts extends Component {
    render() {
        const row = {
            display: 'flex',
            flexWrap: 'wrap'
        }
        const col = {
            width: '50%',
            minWidth: '50%',
            padding: '0 5%'
        }

        return (
            <div style={row}>
                <div style={col}>
                    <div className={classes.Contacts} >
                        <h1>Контакты</h1>
                        <p>При производстве любых медиа-продуктов мы руководствуемся средними рыночными ценами.
                            Но ведь каждый проект уникален. Стоимость его реализации зависит от сложности выполнения,
                            временных затрат и количества используемой техники. Поэтому при обсуждении концепции и
                            технического задания вместе с заказчиком формируется индивидуальный прайс.
                            Мы лояльны и любим проводить акции.
                        </p>

                        <ContactsItem />
                    </div>
                </div>
                <div style={col}>
                    <Callback />
                </div>
            </div>
        )
    }
}