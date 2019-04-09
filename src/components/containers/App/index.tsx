import React, {Component} from 'react'
import styled from 'styled-components'

import Autocomplete from 'components/containers/Autocomplete'

const Container = styled.div`
    display: flex;
    justify-content: center;
    background-color: ${(props) => props.theme.palette.primary};
`

class App extends Component {
    render = () => {
        return (
            <Container>
                <Autocomplete />
            </Container>
        )
    }
}

export default App
