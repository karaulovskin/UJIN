import React, {Component} from 'react'
import classes from './Callback.module.css'
import Input from '../UI/Input/Input'
import Button from '../UI/Button/Button'
import Textarea from '../UI/Textarea/Textarea'

export default class Callback extends Component {
    sendMessage = () => {

    }

    render() {
        return (
            <div className={classes.Callback}>
                <h2>Обратная связь</h2>
                <form>
                    <Input label="Имя" />
                    <Input label="Телефон" />
                    <Input label="Email" />
                    <Textarea label="Сообщение" />
                    <Button
                        type="success"
                        onClick={this.sendMessage}
                    >
                        Отправить
                    </Button>
                </form>
            </div>
        )
    }
}