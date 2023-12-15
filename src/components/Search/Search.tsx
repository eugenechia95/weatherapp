import React, { useState } from 'react'
import SearchInput from './SearchInput'
import { Box, Button, IconButton, Stack, styled, TextField, useTheme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import { SearchRequest } from '../../data/searchRequest/types'
import { useLocalStorage, writeStorage } from '@rehooks/local-storage'

const SearchButton = styled(Button)(() => ({
  padding: '0.81rem',
  borderRadius: '1.25rem',
  width: '3.75rem',
  height: '3.75rem',
}))
const Search = () => {
  const theme = useTheme()
  const [searchRequests] = useLocalStorage('weatherRecords', [])

  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')

  const handleClick = () => {
    const newRequest: SearchRequest = {
      country,
      city,
      timestamp: new Date(),
    }
    const newSearchRequests: SearchRequest[] = [newRequest, ...searchRequests]
    writeStorage('weatherRecords', newSearchRequests)
    handleClear()
  }
  const handleClear = () => {
    setCountry('')
    setCity('')
  }

  return (
    <Stack spacing={2} direction='row'>
      <SearchInput inputState={country} setInputState={setCountry} label={'Country'} />
      <SearchInput inputState={city} setInputState={setCity} label={'City'} />
      <SearchButton aria-label='search' variant='contained' onClick={handleClick}>
        <SearchIcon sx={{ fontSize: '2.125rem' }} />
      </SearchButton>
      <SearchButton aria-label='clear' variant='contained' onClick={handleClear}>
        <ClearIcon sx={{ fontSize: '2.125rem' }} />
      </SearchButton>
    </Stack>
  )
}

export default Search
