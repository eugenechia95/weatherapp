import { Alert, Box, Button, Stack, styled, Typography, useTheme } from '@mui/material'
import Cloud from './../../assets/cloud.png'
import Sun from './../../assets/sun.png'
import { useWeatherDataHook } from '../../data/weather/WeatherDataHook'
import { useContext } from 'react'
import { AppContext, AppContextType } from '../../context/AppContext'
import dayjs from 'dayjs'
import { AxiosError } from 'axios'

const Weather = () => {
  const { country, city, timestamp } = useContext(AppContext) as AppContextType
  const { data, isSuccess, isError, error } = useWeatherDataHook({ country: country, city: city })
  const theme = useTheme()
  console.log(error)
  console.log(data)

  return (
    <Box>
      {isError && <Alert severity='error'>{(error as any).response.data.message}</Alert>}
      {isSuccess && (
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
                  fontSize: { xs: '4rem', sm: '7rem' },
                  fontWeight: 'bold',
                  marginTop: '0!important',
                  lineHeight: '1.2',
                }}
              >
                {`${data?.main.temp}°`}
              </Typography>
              <Typography color='textPrimary'>{`H: ${data?.main.temp_max}° L: ${data?.main.temp_min}°`}</Typography>
            </Stack>
            <Box
              sx={{
                display: 'flex',
                gap: {
                  xs: '0.5rem',
                  sm: '1rem',
                },
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
                {`${city}, ${country}`}
              </Typography>
              <Typography color={theme.palette.weatherDetailsColor}>
                {dayjs(timestamp).format('DD-MM-YYYY h:mm A')}
              </Typography>
              <Typography
                color={theme.palette.weatherDetailsColor}
              >{`Humidity: ${data?.main.humidity}%`}</Typography>
              <Typography color={theme.palette.weatherDetailsColor}>
                {data?.weather[0].description}
              </Typography>
            </Box>
          </Box>
          <Box
            component='img'
            sx={{
              position: 'absolute',
              width: '40%',
              minWidth: '10rem',
              right: 0,
              top: { xs: '-7rem', sm: '-4rem' },
              zIndex: 999,
            }}
            alt={data?.weather[0].id === 800 ? 'Sun' : 'Cloud'}
            src={data?.weather[0].id === 800 ? Sun : Cloud}
          />
        </Box>
      )}
    </Box>
  )
}

export default Weather
