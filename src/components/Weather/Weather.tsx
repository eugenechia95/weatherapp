import { Box, Button, Stack, styled, Typography, useTheme } from '@mui/material'
import Cloud from './../../assets/cloud.png'

const Weather = () => {
  const theme = useTheme()

  return (
    <Box>
      <Box
        sx={{
          display: {
            xs: 'flex',
            sm: 'block',
          },
          justifyContent: 'space-between',
        }}
      >
        <Stack spacing={2} sx={{ position: 'relative' }}>
          <Typography color='textPrimary'>Today&apos;s Weather</Typography>
          <Typography
            color={theme.palette.weatherColor}
            sx={{
              fontSize: '7rem',
              fontWeight: 'bold',
              marginTop: '0!important',
              lineHeight: '1.2',
            }}
          >
            {' '}
            29
          </Typography>
          <Typography color='textPrimary'>H: 29 L: 26</Typography>
        </Stack>
        <Box
          sx={{
            display: 'flex',
            gap: '1rem',
            justifyContent: {
              xs: 'flex-end',
              sm: 'space-between',
            },
            alignItems: {
              xs: 'flex-end',
              sm: 'center',
            },
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
          }}
        >
          <Typography sx={{ fontWeight: 'bold' }} color={theme.palette.weatherDetailsColor}>
            Johor, MY
          </Typography>
          <Typography color={theme.palette.weatherDetailsColor}>01-09-2022 09:41am</Typography>
          <Typography color={theme.palette.weatherDetailsColor}>Humidity: 58%</Typography>
          <Typography color={theme.palette.weatherDetailsColor}>Clouds</Typography>
        </Box>
      </Box>
      <Box
        component='img'
        sx={{
          position: 'absolute',
          width: '40%',
          minWidth: '10rem',
          right: 0,
          top: { xs: '-15%', sm: '-10%' },
          zIndex: 999,
        }}
        alt='Cloud'
        src={Cloud}
      />
    </Box>
  )
}

export default Weather
