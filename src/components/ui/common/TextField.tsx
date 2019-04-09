import React, {
    FunctionComponent,
    KeyboardEvent,
    SyntheticEvent,
    useEffect,
    useRef,
} from 'react'
import styled from 'styled-components'

export const Input = styled.input`
    width: 400px;
    height: 48px;
    padding: ${(props) => props.theme.spacing.unit * 2}px
        ${(props) => props.theme.spacing.unit * 4}px;
    border: 1px solid ${(props) => props.theme.palette.primary};
    font-family: inherit;
    font-size: ${(props) => props.theme.text.size.default};
    border-radius: 8px;
    :focus {
        border: 2px solid ${(props) => props.theme.palette.primary};
        outline: none;
    }
`

interface Props {
    placeholder?: string
    onChange?: (value: string) => void
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void
    value: string
}

const TextField: FunctionComponent<Props> = ({
    onChange,
    onKeyDown,
    placeholder,
    value,
}) => {
    const inputElement = useRef<HTMLInputElement>()

    useEffect(() => {
        if (inputElement && inputElement.current) {
            inputElement.current.focus()
        }
    })

    const handleChange = (e: SyntheticEvent<HTMLInputElement>): void => {
        onChange && onChange(e.currentTarget.value)
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
        onKeyDown && onKeyDown(e)
    }

    return (
        <Input
            onChange={handleChange}
            placeholder={placeholder}
            onKeyDown={handleKeyDown}
            ref={inputElement as any}
            value={value}
        />
    )
}

export default TextField
