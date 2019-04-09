import React, {Component} from 'react'
import {bindActionCreators, Dispatch} from 'redux'
import {connect} from 'react-redux'

import {TextField} from 'components/ui/common'
import {updateValue} from 'ducks/autocomplete'

type Props = ReturnType<typeof mapDispatchToProps>

class Autocomplete extends Component<Props> {
    handleUpdate = (value: string) => {
        const {updateValue} = this.props

        updateValue(value)
    }

    render = () => {
        return (
            <TextField
                placeholder="Start typing"
                onChange={this.handleUpdate}
            />
        )
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
    null,
    mapDispatchToProps,
)(Autocomplete)
