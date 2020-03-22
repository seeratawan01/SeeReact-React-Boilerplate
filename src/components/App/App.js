import React from 'react'
import logo from './assets/logo.png';
import './assets/App.scss'

import User from '../User'

const App = () => {
    return (
        <div className='app'>
            <div>
                <img src={logo} alt="Logo" width="250" />
                <h1>SeeReact React Boilerplate</h1>
                <a target="_blank" href="https://github.com/Xuntron/SeeReact-React-Boilerplate">Read More</a>
                <User />
            </div>
        </div>
    )
}

export default App;