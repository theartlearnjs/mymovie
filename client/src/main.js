/*eslint-disable no-unused-vars */
import 'normalize.css'
import React from 'react'
import { render } from 'react-dom'
import App from './app'
if(module.hot){
    module.hot.accept()
}

render(
    <App />,
    document.getElementById('app')
)