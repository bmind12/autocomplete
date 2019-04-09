import React, {ReactElement} from 'react'
import {createStore, Store} from 'redux'
import {Provider} from 'react-redux'
import {ThemeProvider} from 'styled-components'
import {mainTheme} from 'assets/theme'
import {render as rtlRender} from 'react-testing-library'
import {State as AppState} from 'store'
import reducer from 'store/reducer'

export function render(
    component: ReactElement,
    {
        initialState,
        store = createStore(reducer, initialState),
    }: {
        initialState?: AppState
        store?: Store
    } = {},
) {
    return {
        ...rtlRender(
            <ThemeProvider theme={mainTheme}>
                <Provider store={store}>{component}</Provider>
            </ThemeProvider>,
        ),
        store,
    }
}
