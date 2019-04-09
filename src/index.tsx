import React from 'react'
import ReactDOM from 'react-dom'
import {ThemeProvider} from 'styled-components'
import {Provider} from 'react-redux'
import store from 'store'

import {mainTheme} from '../assets/theme'

import App from 'components/containers/App/index'

ReactDOM.render(
    <ThemeProvider theme={mainTheme}>
        <Provider store={store}>
            <App />
        </Provider>
    </ThemeProvider>,
    document.getElementById('root'),
)
