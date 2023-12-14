import { Box, Button, Stack, styled, Typography, useTheme } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import DeleteIcon from '@mui/icons-material/Delete'
import React from 'react'

const SearchHistoryButton = styled(Button)(() => ({
  borderRadius: '50%',
  minWidth: 'auto',
  width: '2.125rem',
  height: '2.125rem',
  padding: 0,
  backgroundColor: 'white',
}))
const SearchHistoryRecord = () => {
  const theme = useTheme()

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
          Johor, MY
        </Typography>
        <Typography color='textSecondary' align={'left'}>
          01-09-2022 09:41am
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
        <SearchHistoryButton>
          <SearchIcon sx={{ fontSize: '1rem' }} color='secondary' />
        </SearchHistoryButton>
        <SearchHistoryButton>
          <DeleteIcon sx={{ fontSize: '1rem' }} color='secondary' />
        </SearchHistoryButton>
      </Box>
    </Box>
  )
}

export default SearchHistoryRecord
