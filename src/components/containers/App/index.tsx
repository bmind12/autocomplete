import React, {Component} from 'react'
import styled from 'styled-components'
import './styles'

const Title = styled.h1`
    background-color: ${(props) => props.theme.palette.primary};
`

class App extends Component {
    _handleOnClick = (text: 'hello, world!--' | '123') => {
        console.log(text)
        console.log(text)
    }

    render = () => {
        return (
            <div className="App">
                <Title onClick={() => this._handleOnClick('hello, world!--')}>
                    Hello, World!
                </Title>
            </div>
        )
    }
}

export default App
