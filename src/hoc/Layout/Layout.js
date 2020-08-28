import React, {Component} from 'react'
import classes from './Layout.module.css'
import Logo from '../../Navigation/Logo/Logo'
import Menu from '../../Navigation/Menu/Menu'
import Socials from '../../components/Socials/Socials'

class Layout extends Component {
    render() {
        return(
            <div className={classes.Layout}>
                <Logo />
                <Menu />
                <Socials />

                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout