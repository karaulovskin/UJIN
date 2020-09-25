import React, {Component} from 'react'
import CardList from '../../components/CardList/CardList'
import axios from 'axios'

export default class Projects extends Component {

    componentDidMount() {
        axios.get('https://video-253d9.firebaseio.com/portfolio.json').then(response => {
            console.log(response)
        })
    }

    render() {
        return (
            <div>
                <h1>Проекты</h1>

                <CardList/>
            </div>
        )
    }
}