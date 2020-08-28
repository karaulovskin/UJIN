import React from 'react'
import Layout from './hoc/Layout/Layout'
import {Route, Switch} from 'react-router-dom'
import Main from './containers/Main/Main'
import Projects from './containers/Projects/Projects'
import Team from './containers/Team/Team'
import Contacts from './containers/Contacts/Contacts'

function App() {
    return (
        <div className="App">
            <Layout>
                <Switch>
                    <Route path="/projects" component={Projects} />
                    <Route path="/team" component={Team} />
                    <Route path="/contacts" component={Contacts} />
                    <Route path="/" component={Main} />
                </Switch>
            </Layout>
        </div>
    );
}

export default App;
