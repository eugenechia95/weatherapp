import { QueryFunctionContext } from '@tanstack/react-query'
import apiClient from '../../APIClient'
import { WeatherDataRequest, WeatherRequest } from './types'

export const getWeatherData = async ({
  queryKey,
}: QueryFunctionContext<[string, WeatherDataRequest]>) => {
  const [_key, { country, city }] = queryKey
  const response = await apiClient.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&units=metric&appid=${process.env['REACT_APP_API_KEY']}`,
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
