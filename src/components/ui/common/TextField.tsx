import React, {FunctionComponent, SyntheticEvent, useState} from 'react'
import styled from 'styled-components'

const Input = styled.input`
    background-color: ${(props) => props.theme.palette.secondary};
`

type Props = {
    placeholder?: string
    onChange?: (value: string) => void
}

const TextField: FunctionComponent<Props> = ({onChange, placeholder}) => {
    const [value, changeValue] = useState('')

    const handleChange = (e: SyntheticEvent<HTMLInputElement>): void => {
        const value = e.currentTarget.value

        changeValue(value)

        onChange && onChange(value)
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
