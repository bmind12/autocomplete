import React, {SyntheticEvent, useState} from 'react'
import styled from 'styled-components'

const Input = styled.input`
    background-color: ${(props) => props.theme.palette.secondary};
`

type Props = {
    placeholder?: string
}

const TextField = ({placeholder}: Props): JSX.Element => {
    const [value, changeValue] = useState('')

    const handleChange = (e: SyntheticEvent<HTMLInputElement>): void => {
        changeValue(e.currentTarget.value)
    }

    return (
        <Input
            onChange={handleChange}
            placeholder={placeholder}
            value={value}
        />
    )
}

export default TextField
