import React from 'react'
import ReactDOM from 'react-dom'
import {ThemeProvider} from 'styled-components'

import {mainTheme} from '../assets/theme'
import App from 'components/containers/App/index'

ReactDOM.render(
    <ThemeProvider theme={mainTheme}>
        <App />
    </ThemeProvider>,
    document.getElementById('root'),
)
