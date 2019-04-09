import {Action} from 'redux'
import {createSelector} from 'reselect'
import {actionCreatorFactory, isType} from 'typescript-fsa'

import {State as AppState} from 'store'
import {appName} from '../../config'

// Constants
export const moduleName = 'autocomplete'
const prefix = `${appName}/${moduleName}`

const UPDATE = `${prefix}/UPDATE`

// Types
type Value = string

interface State {
    suggestions: {
        source: string[]
    }
    value: Value
}

const defaultState: State = {
    suggestions: {
        source: [
            'cam',
            'camera',
            'campaign',
            'cat',
            'catalonia',
            'category',
            'catfish',
            'catamaran',
        ],
    },
    value: '',
}

// Reducer
export default function reducer(state = defaultState, action: Action): State {
    if (isType(action, updateValue)) {
        return {
            ...state,
            value: action.payload,
        }
    }

    return state
}

// Action Creators
const actionCreator = actionCreatorFactory()

export const updateValue = actionCreator<Value>(UPDATE)

// Selectors
export const getSuggestions = (state: AppState) =>
    state.autocomplete.suggestions.source
export const getInputValue = (state: AppState) => state.autocomplete.value

export const getSuggestionsByValue = createSelector(
    [getSuggestions, getInputValue],
    (suggestions, value) =>
        suggestions.filter(
            (suggestion) =>
                suggestion.includes(value && value.toLowerCase()) &&
                suggestion !== value &&
                value.toLocaleLowerCase(),
        ),
)
