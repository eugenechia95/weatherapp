import { TextField } from '@mui/material'

const Search = () => {
  return (
    <TextField
      required
      id='country'
      label='Country'
      InputLabelProps={{
        shrink: true,
      }}
      variant='standard'
    />
  )
}

export default Search
