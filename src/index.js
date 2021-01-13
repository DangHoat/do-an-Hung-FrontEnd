import React from 'react'
import {render} from 'react-dom'
import App from './views/App'
import "./style.css"
import { CookiesProvider } from 'react-cookie'
import {Provider} from 'react-redux'
import configureStore  from "./redux/store"
const store =  configureStore ()
render(
    <CookiesProvider>
        <Provider store ={store}>
            <App />
        </Provider>
    </CookiesProvider> 
,document.getElementById('root'))