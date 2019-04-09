import {appName} from '../../config'
import {Action} from 'redux'
import actionCreatorFactory, {isType} from 'typescript-fsa'

// Constants
export const moduleName = 'autocomplete'
const prefix = `${appName}/${moduleName}`

const UPDATE = `${prefix}/UPDATE`

// Types
type Value = string

interface State {
    suggestions: {
        byId?: {
            [key: string]: string[]
        }
        source: string[]
    }
    value?: Value
}

const defaultState: State = {
    suggestions: {
        source: ['cat', 'catalonia', 'category', 'catfish', 'cat'],
    },
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
