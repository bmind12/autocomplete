import React, {FunctionComponent} from 'react'

type Props = {
    suggestions: string[]
}

const Suggestions: FunctionComponent<Props> = ({suggestions}) => {
    const renderSuggestions = (suggestions: string[]) => {
        return suggestions.map((suggestion) => (
            <li key={suggestion}>{suggestion}</li>
        ))
    }

    return <ul>{renderSuggestions(suggestions)}</ul>
}

export default Suggestions
