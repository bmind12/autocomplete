import 'jest-dom/extend-expect'
import 'react-testing-library/cleanup-after-each'
import React from 'react'
import {render} from 'utils/tests'
import Suggestions from './index'

const props = {
    activeSuggestion: 0,
    areSuggestionsActive: false,
    suggestions: ['1', '2', '3'],
}

describe('Suggestions component', () => {
    test('renders li elements', () => {
        const {container} = render(<Suggestions {...props} />)

        const liElements = container.querySelectorAll('li')

        expect(liElements.length).toEqual(props.suggestions.length)
    })

    test("doesn't render li elements if no suggestions provided", () => {
        const {container} = render(<Suggestions {...props} suggestions={[]} />)

        const liElements = container.querySelectorAll('li')

        expect(liElements.length).toEqual(0)
    })

    test(`doesn't break if suggestions are undefined`, () => {
        const {container} = render(<Suggestions {...props} suggestions={[]} />)

        const list = container.querySelector('ul')

        expect(list).toBeInTheDocument()
    })
})
