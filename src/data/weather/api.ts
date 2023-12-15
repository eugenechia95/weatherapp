import { QueryFunctionContext } from '@tanstack/react-query'
import apiClient from '../../APIClient'
import { WeatherDataRequest, WeatherRequest } from './types'

export const getWeatherData = async ({
  queryKey,
}: QueryFunctionContext<[string, WeatherDataRequest]>) => {
  const [_key, { country, city }] = queryKey
  console.log('here')
  const response = await apiClient.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${'67d75b8142ddf316a64aff5603f8e154'}`,
  )
  return response.data
  // return {
  //   weather: [
  //     {
  //       id: 800,
  //       main: 'Rain',
  //       description: 'clouds',
  //       icon: '10d',
  //     },
  //   ],
  //   main: {
  //     temp: 28.4,
  //     // eslint-disable-next-line camelcase
  //     temp_min: 29.5,
  //     // eslint-disable-next-line camelcase
  //     temp_max: 30.5,
  //     pressure: 1015,
  //     humidity: 64,
  //   },
  // }
}
