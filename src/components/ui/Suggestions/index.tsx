import React, {FunctionComponent} from 'react'
import styled from 'styled-components'

import {styledComponentWithProps} from 'utils/styles'

const List = styled.ul`
    width: 400px;
    margin: 0;
    padding: 0;
    border: 1px solid ${(props) => props.theme.palette.primary};
    font-size: ${(props) => props.theme.text.size.default};
    font-family: inherit;
    border-radius: 8px;
    background-color: ${(props) => props.theme.palette.white};
    list-style: none;
`

interface ListItemProps {
    active: boolean
    first: boolean
    last: boolean
}

const ListItem = styledComponentWithProps<ListItemProps, HTMLDivElement>(
    styled.li,
)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${(props) => props.theme.spacing.unit * 2}px
        ${(props) => props.theme.spacing.unit * 4}px;
    background-color: ${(props) =>
        props.active ? props.theme.palette.secondary : 'transparent'};
    border-radius: ${(props) => (props.first ? 8 : 0)}px ${(props) =>
    props.first ? 8 : 0}px ${(props) => (props.last ? 8 : 0)}px ${(props) =>
    props.last ? 8 : 0}px;
`

const ActiveNote = styled.span`
    font-size: ${(props) => props.theme.text.size.note};
`

interface Props {
    activeSuggestion: null | number
    areSuggestionsActive: boolean
    suggestions: string[]
}

const Suggestions: FunctionComponent<Props> = ({
    activeSuggestion,
    areSuggestionsActive,
    suggestions,
}) => {
    const renderSuggestions = () =>
        suggestions &&
        suggestions.slice(0).map((suggestion, index, arr) => {
            const isActive = areSuggestionsActive && index === activeSuggestion
            const isFirst = index === 0
            const isLast = index === arr.length - 1

            return (
                <ListItem
                    key={suggestion}
                    active={isActive}
                    first={isFirst}
                    last={isLast}
                >
                    <span>{suggestion}</span>
                    {isActive && <ActiveNote>press → to select</ActiveNote>}
                </ListItem>
            )
        })

    return <List>{renderSuggestions()}</List>
}

export default Suggestions
