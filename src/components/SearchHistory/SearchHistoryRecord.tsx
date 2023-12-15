import { Box, Button, Stack, styled, Typography, useTheme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import DeleteIcon from '@mui/icons-material/Delete'
import React from 'react'
import { SearchRequest } from '../../data/searchRequest/types'
import dayjs from 'dayjs'
import { useLocalStorage, writeStorage } from '@rehooks/local-storage'

const SearchHistoryButton = styled(Button)(() => ({
  borderRadius: '50%',
  minWidth: 'auto',
  width: '2.125rem',
  height: '2.125rem',
  padding: 0,
  backgroundColor: 'white',
}))

const SearchHistoryRecord = ({
  country,
  city,
  timestamp,
  index,
}: SearchRequest & { index: number }) => {
  const theme = useTheme()

  const [searchRequests] = useLocalStorage('weatherRecords', [])

  const handleDelete = () => {
    const newSearchRequests: SearchRequest[] = [...searchRequests]
    newSearchRequests.splice(index, 1)
    writeStorage('weatherRecords', newSearchRequests)
  }

  const handleSearch = () => {
    const newRequest: SearchRequest = {
      country,
      city,
      timestamp: new Date(),
    }
    const newSearchRequests: SearchRequest[] = [newRequest, ...searchRequests]
    writeStorage('weatherRecords', newSearchRequests)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: theme.palette.background.paper,
        padding: '1.3rem',
        borderRadius: '1rem',
        alignItems: 'center',
        gap: '1rem',
      }}
    >
      <Box
        sx={{
          display: {
            xs: 'block',
            sm: 'flex',
          },
          backgroundColor: 'transparent',
          alignItems: 'center',
          justifyContent: {
            xs: 'flex-start',
            sm: 'space-between',
          },
          gap: '1rem',
          flexGrow: 1,
        }}
      >
        <Typography color='textPrimary' align={'left'}>
          {`${city}, ${country}`}
        </Typography>
        <Typography color='textSecondary' align={'left'}>
          {dayjs(timestamp).format('DD-MM-YYYY h:mm A')}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          backgroundColor: 'transparent',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
        }}
      >
        <SearchHistoryButton onClick={handleSearch}>
          <SearchIcon sx={{ fontSize: '1rem' }} color='secondary' />
        </SearchHistoryButton>
        <SearchHistoryButton onClick={handleDelete}>
          <DeleteIcon sx={{ fontSize: '1rem' }} color='secondary' />
        </SearchHistoryButton>
      </Box>
    </Box>
  )
}

export default SearchHistoryRecord
