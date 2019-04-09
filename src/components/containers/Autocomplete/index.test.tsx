import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import React from 'react'
import {render} from 'utils/tests'
import Autocomplete from './index'
import {fireEvent} from 'react-testing-library'

describe('Autocomplete component', () => {
    test('handles onChange event', () => {
        const {getByPlaceholderText} = render(<Autocomplete />, {
            initialState: {
                autocomplete: {
                    suggestions: {source: ['1', '2', '3']},
                    value: '',
                },
            },
        })

        const input = getByPlaceholderText('Start typing ca...')

        fireEvent.change(input, {
            target: {value: 'CAT'},
        })

        expect(input).toHaveAttribute('value', 'CAT')
    })

    test('displays Note when there are suggestions what match the input', () => {
        const {getByText} = render(<Autocomplete />, {
            initialState: {
                autocomplete: {
                    suggestions: {source: ['cat1', 'cat2', 'cat3']},
                    value: 'cat',
                },
            },
        })

        expect(getByText(/Press ↓ to select suggestion/i)).toBeInTheDocument()
    })

    test('doesnt display Note when the value is shorter than 2 chars', () => {
        const {queryByText} = render(<Autocomplete />, {
            initialState: {
                autocomplete: {
                    suggestions: {source: ['cat1', 'cat2', 'cat3']},
                    value: 'c',
                },
            },
        })

        expect(queryByText(/Press ↓ to select suggestion/i)).toBeNull()
    })

    test('doesnt display Note when there are no suggestions', () => {
        const {queryByText} = render(<Autocomplete />, {
            initialState: {
                autocomplete: {
                    suggestions: {source: []},
                    value: 'cat',
                },
            },
        })

        expect(queryByText(/Press ↓ to select suggestion/i)).toBeNull()
    })

    test('activates suggestion on keyDown', () => {
        const {getByPlaceholderText, getByText} = render(<Autocomplete />, {
            initialState: {
                autocomplete: {
                    suggestions: {source: ['cat1', 'cat2', 'cat3', 'cat4']},
                    value: 'cat',
                },
            },
        })

        fireEvent.keyDown(getByPlaceholderText(/Start typing ca.../i), {
            keyCode: 40,
        })

        expect(getByText(/press → to select/i)).toBeInTheDocument()
    })

    test('activates suggestion on keyUp', () => {
        const {getByPlaceholderText, getByText} = render(<Autocomplete />, {
            initialState: {
                autocomplete: {
                    suggestions: {source: ['cat1', 'cat2', 'cat3', 'cat4']},
                    value: 'cat',
                },
            },
        })

        fireEvent.keyDown(getByPlaceholderText(/Start typing ca.../i), {
            keyCode: 38,
        })

        expect(getByText(/press → to select/i)).toBeInTheDocument()
    })

    test('deactivates suggestion on navigating back to input', () => {
        const {getByPlaceholderText, queryByText} = render(<Autocomplete />, {
            initialState: {
                autocomplete: {
                    suggestions: {source: ['cat1', 'cat2', 'cat3', 'cat4']},
                    value: 'cat',
                },
            },
        })

        const input = getByPlaceholderText(/Start typing ca.../i)

        fireEvent.keyDown(input, {
            keyCode: 38,
        })

        fireEvent.keyDown(input, {
            keyCode: 40,
        })

        expect(queryByText(/press → to select/i)).toBeNull()
    })

    test('deactivates suggestion on left arrow press', () => {
        const {getByPlaceholderText, queryByText} = render(<Autocomplete />, {
            initialState: {
                autocomplete: {
                    suggestions: {source: ['cat1', 'cat2', 'cat3', 'cat4']},
                    value: 'cat',
                },
            },
        })

        const input = getByPlaceholderText(/Start typing ca.../i)

        fireEvent.keyDown(input, {
            keyCode: 38,
        })

        fireEvent.keyDown(input, {
            keyCode: 37,
        })

        expect(queryByText(/press → to select/i)).toBeNull()
    })
})
