import {Component} from 'react'
import React from 'react'
import Nav from './components/nav/nav'
import Content from './components/content/content'

class App extends Component{
    render() {
        return (
            <div>
                <Nav />
                <Content />   
            </div>
               
        )
    }
}
export default App