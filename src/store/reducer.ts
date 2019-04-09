import {combineReducers} from 'redux'
import autocompleteReducer, {
    moduleName as autocompleteModule,
} from 'ducks/autocomplete'

export default combineReducers({
    [autocompleteModule]: autocompleteReducer,
})
