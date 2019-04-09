import React, {Component, KeyboardEvent} from 'react'
import styled from 'styled-components'
import {bindActionCreators, Dispatch} from 'redux'
import {connect} from 'react-redux'
import {State as AppState} from 'store'

import {
    getSuggestionsByValue,
    updateValue,
    getInputValue,
} from 'ducks/autocomplete'

import {TextField} from 'components/ui/common'
import Suggestions from 'components/ui/Suggestions'

const Note = styled.p`
    font-size: ${(props) => props.theme.text.size.note};
    padding-left: ${(props) => props.theme.spacing.unit}px;
    margin: ${(props) => props.theme.spacing.unit}px
        ${(props) => props.theme.spacing.unit * 3}px;
`

type Props = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>

interface State {
    activeSuggestion: number
    areSuggestionsActive: boolean
}

class Autocomplete extends Component<Props, State> {
    state = {
        activeSuggestion: 0,
        areSuggestionsActive: false,
    }

    handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        const {suggestions, updateValue} = this.props
        const {activeSuggestion, areSuggestionsActive} = this.state
        const upPressed = e.keyCode === 38
        const downPressed = e.keyCode === 40

        if (upPressed || downPressed) {
            e.preventDefault()
        }

        if (!areSuggestionsActive && (upPressed || downPressed)) {
            this.toggleSuggestions()
            this.updateActiveSuggestion(upPressed ? suggestions.length - 1 : 0)
        } else if (areSuggestionsActive) {
            switch (e.keyCode) {
                // down pressed
                case 40: {
                    this.handleDownPress()
                    break
                }
                // up pressed
                case 38: {
                    this.handleUpPress()
                    break
                }
                // left pressed
                case 37: {
                    this.toggleSuggestions()
                    break
                }
                // right pressed
                case 39: {
                    this.updateActiveSuggestion(0)
                    updateValue(suggestions && suggestions[activeSuggestion])
                    break
                }
            }
        }
    }

    toggleSuggestions = () => {
        this.setState((state) => ({
            areSuggestionsActive: !state.areSuggestionsActive,
        }))
    }

    updateActiveSuggestion = (newActive: number) => {
        this.setState({
            activeSuggestion: newActive,
        })
    }

    handleDownPress = () => {
        const newActive = this.state.activeSuggestion + 1

        if (newActive >= this.props.suggestions.length) {
            this.toggleSuggestions()
        } else {
            this.updateActiveSuggestion(newActive)
        }
    }

    handleUpPress = () => {
        const newActive = this.state.activeSuggestion - 1

        if (newActive < 0) {
            this.toggleSuggestions()
        } else {
            this.updateActiveSuggestion(newActive)
        }
    }

    render = () => {
        const {updateValue, suggestions, value} = this.props
        const {activeSuggestion, areSuggestionsActive} = this.state

        return (
            <>
                <TextField
                    placeholder="Start typing ca..."
                    onChange={updateValue}
                    onKeyDown={this.handleKeyDown}
                    value={value}
                />
                {suggestions &&
                    suggestions.length > 0 &&
                    value &&
                    value.length >= 2 && (
                        <>
                            <Note>Press ↓ to select suggestion</Note>
                            <Suggestions
                                activeSuggestion={activeSuggestion}
                                areSuggestionsActive={areSuggestionsActive}
                                suggestions={suggestions}
                            />
                        </>
                    )}
            </>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    suggestions: getSuggestionsByValue(state),
    value: getInputValue(state),
})

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(
        {
            updateValue,
        },
        dispatch,
    )

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Autocomplete)
