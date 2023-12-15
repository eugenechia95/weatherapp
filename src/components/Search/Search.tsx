import React, { useContext, useState } from 'react'
import SearchInput from './SearchInput'
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Stack,
  styled,
  TextField,
  useTheme,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import { useLocalStorage, writeStorage } from '@rehooks/local-storage'
import { WeatherRequest } from '../../data/weather/types'
import { AppContext, AppContextType } from '../../context/AppContext'
import { isValidInput } from '../../utils/ValidationUtils'

const SearchButton = styled(Button)(() => ({
  padding: '0.81rem',
  borderRadius: '1.25rem',
  width: '3.75rem',
  height: '3.75rem',
}))
const Search = () => {
  const theme = useTheme()
  const [searchRequests] = useLocalStorage('weatherRecords', [])
  const { setCountry, setTimestamp, setCity } = useContext(AppContext) as AppContextType

  const [countryInput, setCountryInput] = useState('')
  const [cityInput, setCityInput] = useState('')

  const handleClick = () => {
    console.log('handled')
    const current = new Date()
    const newRequest: WeatherRequest = {
      country: countryInput,
      city: cityInput,
      timestamp: current,
    }
    const newSearchRequests: WeatherRequest[] = [newRequest, ...searchRequests]
    writeStorage('weatherRecords', newSearchRequests)
    setCountry(countryInput)
    setCity(cityInput)
    setTimestamp(current)
    handleClear()
  }
  const handleClear = () => {
    setCountryInput('')
    setCityInput('')
  }

  return (
    <form>
      <Stack spacing={2} direction='row'>
        <SearchInput inputState={countryInput} setInputState={setCountryInput} label={'Country'} />
        <SearchInput inputState={cityInput} setInputState={setCityInput} label={'City'} />
        <SearchButton
          aria-label='search'
          variant='contained'
          disabled={
            !countryInput || !cityInput || !isValidInput(countryInput) || !isValidInput(cityInput)
          }
          type={'submit'}
          onClick={handleClick}
        >
          <SearchIcon sx={{ fontSize: '2.125rem' }} />
        </SearchButton>
        <SearchButton
          aria-label='clear'
          variant='contained'
          onClick={handleClear}
          disabled={!countryInput && !cityInput}
        >
          <ClearIcon sx={{ fontSize: '2.125rem' }} />
        </SearchButton>
      </Stack>
    </form>
  )
}

export default Search
