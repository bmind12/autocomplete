import React, {Component} from 'react'
import {bindActionCreators, Dispatch} from 'redux'
import {connect} from 'react-redux'
import {State} from 'store'

import {
    getSuggestionsByValue,
    updateValue,
    getInputValue,
} from 'ducks/autocomplete'

import {TextField} from 'components/ui/common'
import Suggestions from 'components/ui/Suggestions'

type Props = ReturnType<typeof mapStateToProps> &
    ReturnType<typeof mapDispatchToProps>

class Autocomplete extends Component<Props> {
    handleUpdate = (value: string) => {
        const {updateValue} = this.props

        updateValue(value)
    }

    render = () => {
        const {suggestions, value} = this.props

        return (
            <>
                <TextField
                    placeholder="Start typing cat..."
                    onChange={this.handleUpdate}
                    value={value}
                />
                {value.length >= 3 && <Suggestions suggestions={suggestions} />}
            </>
        )
    }
}

const mapStateToProps = (state: State) => {
    return {
        suggestions: getSuggestionsByValue(state),
        value: getInputValue(state),
    }
}

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
