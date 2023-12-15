import React from 'react'
import { styled, TextField, TextFieldProps, useTheme } from '@mui/material'
import { isValidInput } from '../../utils/ValidationUtils'

type SearchInputProps = {
  label: string
  inputState: string
  setInputState: React.Dispatch<React.SetStateAction<string>>
}

const SearchInputTextField = styled(TextField)<{ backgroundColor: string }>(
  ({ backgroundColor }) => ({
    flexGrow: 1,
    backgroundColor: backgroundColor,
    borderRadius: '1.25rem',
    padding: '0.19rem 1.37rem',
    '& label': {
      top: '0.19rem',
      left: '1.37rem',
      fontSize: '0.625rem',
      transform: 'none',
      lineHeight: '1.8',
    },
  }),
)
const SearchInput = (props: SearchInputProps) => {
  const theme = useTheme()

  return (
    <SearchInputTextField
      error={!isValidInput(props.inputState)}
      helperText={!isValidInput(props.inputState) && 'Input is invalid'}
      backgroundColor={theme.palette.background.paper}
      required
      id={props.label}
      label={props.label}
      InputProps={{ disableUnderline: true }}
      InputLabelProps={{
        shrink: true,
      }}
      variant='standard'
      value={props.inputState}
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        props.setInputState(event.target.value)
      }}
    />
  )
}

export default SearchInput
