import { TextField } from '@mui/material'
import React, { useState } from 'react'

const Search = () => {
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')

  return (
    <div>
      <TextField
        required
        id='country'
        label='Country'
        InputLabelProps={{
          shrink: true,
        }}
        variant='standard'
        value={country}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setCountry(event.target.value)
        }}
      />
      <TextField
        required
        id='city'
        label='City'
        InputLabelProps={{
          shrink: true,
        }}
        variant='standard'
        value={city}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setCity(event.target.value)
        }}
      />
    </div>
  )
}

export default Search
