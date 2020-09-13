import React, {Component} from 'react'
import classes from './Layout.module.css'
import Logo from '../../Navigation/Logo/Logo'
import Menu from '../../Navigation/Menu/Menu'
import Socials from '../../components/Socials/Socials'
import MainVideo from '../../components/MainVideo/MainVideo'
import {Route} from 'react-router-dom'

class Layout extends Component {
    render() {
        return(
            <div className={classes.Layout}>
                <Route path="/" exact render={MainVideo} />
                <Logo />
                <Menu />
                <Socials />

                <main>
                    <div className="container">
                        {this.props.children}
                    </div>
                </main>
            </div>
        )
    }
}

export default Layout