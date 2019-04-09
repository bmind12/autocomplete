import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import React from 'react'
import {render} from 'utils/tests'
import TextField from './TextField'

const props = {
    value: 'Some value',
    placeholder: 'Start typing ca...',
}

describe('TextField component', () => {
    test('renders with recieved value', () => {
        const {getByDisplayValue} = render(<TextField {...props} />)

        expect(getByDisplayValue(props.value)).toBeInTheDocument()
    })

    test('renders with a focus on it', () => {
        const {getByDisplayValue} = render(<TextField {...props} />)

        expect(getByDisplayValue(props.value)).toHaveFocus()
    })

    test('renders with recieved placeholder', () => {
        const {getByPlaceholderText} = render(<TextField {...props} />)

        expect(getByPlaceholderText(props.placeholder)).toHaveAttribute(
            'placeholder',
            props.placeholder,
        )
    })

    test("doesn' crash on recieving undefind as value and displays placeholder", () => {
        const {getByPlaceholderText} = render(
            <TextField {...props} value={undefined as any} />,
        )

        expect(getByPlaceholderText(props.placeholder)).toHaveAttribute(
            'placeholder',
            props.placeholder,
        )
    })
})
