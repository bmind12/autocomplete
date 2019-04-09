import React, {FunctionComponent, SyntheticEvent} from 'react'
import styled from 'styled-components'

const Input = styled.input`
    width: 400px;
    height: 48px;
    padding: ${(props) => props.theme.spacing.unit * 2}px
        ${(props) => props.theme.spacing.unit * 4}px;
    border: 1px solid ${(props) => props.theme.palette.primary};
    font-size: ${(props) => props.theme.text.size.default};
    border-radius: 8px;
    background-color: ${(props) => props.theme.palette.secondary};
    :focus {
        border: 3px solid ${(props) => props.theme.palette.primary};
        outline: none;
    }
    ::placeholder {
        color: ${(props) => props.theme.palette.secondary};
    }
`

type Props = {
    placeholder?: string
    onChange?: (value: string) => void
    value: string
}

const TextField: FunctionComponent<Props> = ({
    onChange,
    placeholder,
    value,
}) => {
    const handleChange = (e: SyntheticEvent<HTMLInputElement>): void => {
        onChange && onChange(e.currentTarget.value)
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
