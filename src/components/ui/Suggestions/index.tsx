import React, {FunctionComponent} from 'react'
import styled from 'styled-components'

const List = styled.ul`
    width: 400px;
    margin: 0;
    padding: ${(props) => props.theme.spacing.unit * 2}px
        ${(props) => props.theme.spacing.unit * 4}px;
    border: 1px solid ${(props) => props.theme.palette.primary};
    font-size: ${(props) => props.theme.text.size.default};
    font-family: inherit;
    border-radius: 8px;
    background-color: ${(props) => props.theme.palette.white};
    list-style: none;
`

type Props = {
    suggestions: string[]
}

const Suggestions: FunctionComponent<Props> = ({suggestions}) => {
    const renderSuggestions = (suggestions: string[]) => {
        return suggestions.map((suggestion) => (
            <li key={suggestion}>{suggestion}</li>
        ))
    }

    return <List>{renderSuggestions(suggestions)}</List>
}

export default Suggestions
