import React from 'react'
import {Route, BrowserRouter} from 'react-router-dom'
import SetOverview from './SetOverview'
import Set from './Set'
import Episode from './Episode'
import './Layout.css'

class Layout extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <header className="app__header">
            Movie Bird Demo
          </header>
          <div className="app__content">
            <Route exact path="/" component={SetOverview}/>
            <Route path="/set/:uid" component={Set}/>
            <Route path="/episode/:uid" component={Episode}/>
          </div>
          <footer className="app__footer">
            This Demo is made with help of
            React, Redux <br/>
            Developed by <a href="http://kevinjohne.me" target="_blank">Kevin Johne</a>
          </footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default Layout;
