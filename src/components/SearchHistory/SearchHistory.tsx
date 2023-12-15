import { Stack, Typography, useTheme } from '@mui/material'
import SearchHistoryRecord from './SearchHistoryRecord'
import { SearchRequest } from '../../data/searchRequest/types'
import { useLocalStorage } from '@rehooks/local-storage'

const SearchHistory = () => {
  const theme = useTheme()
  const [searchRequests] = useLocalStorage('weatherRecords', [])

  const renderSearchHistoryRecords = () => {
    return (searchRequests as SearchRequest[]).map((request, index) => {
      return (
        <SearchHistoryRecord
          index={index}
          country={request.country}
          city={request.city}
          timestamp={request.timestamp}
          key={request.timestamp.toString()}
        />
      )
    })
  }

  return (
    <Stack
      sx={{
        padding: '1.44rem 1.62rem',
        borderRadius: '1.5rem',
        backgroundColor: theme.palette.mainBackground,
      }}
      spacing={1.5}
    >
      <Typography color='textPrimary'>Search History</Typography>
      <Stack spacing={2}>{renderSearchHistoryRecords()}</Stack>
    </Stack>
  )
}

export default SearchHistory
