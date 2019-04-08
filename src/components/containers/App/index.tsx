import React, {Component} from 'react'
import styled from 'styled-components'

import {TextField} from 'components/ui/common'

const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.theme.palette.primary};
`

class App extends Component {
    render = () => {
        return (
            <Container>
                <TextField placeholder="Start typing" />
            </Container>
        )
    }
}

export default App
