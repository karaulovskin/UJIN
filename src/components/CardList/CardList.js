import React, { Component } from 'react'
import Card from '../Card/Card'
import classes from './CardList.module.scss'

export const item = [
    {
        id: '1',
        title: '',
        desc: '',
    },
    {
        id: '2',
        title: '',
        desc: '',
    },
    {
        id: '3',
        title: '',
        desc: '',
    },
    {
        id: '4',
        title: '',
        desc: '',
    },
    {
        id: '5',
        title: '',
        desc: '',
    },
    {
        id: '6',
        title: '',
        desc: '',
    },
    {
        id: '7',
        title: '',
        desc: '',
    },
    {
        id: '8',
        title: '',
        desc: '',
    },
]

class CardList extends Component {
    render() {
        return (
            <div className={classes.list}>
                {
                    item.map(({id, title, desc}) => (
                        <Card
                            key={id}
                        />
                    ))
                }
            </div>
        )
    }
}

export default CardList