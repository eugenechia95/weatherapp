import { QueryFunctionContext } from '@tanstack/react-query'
import apiClient from '../../APIClient'
import { WeatherDataRequest, WeatherRequest } from './types'

export const getWeatherData = async ({
  queryKey,
}: QueryFunctionContext<[string, WeatherDataRequest]>) => {
  const [_key, { country, city }] = queryKey
  console.log('here')
  // const response = await apiClient.get(
  //   `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${'67d75b8142ddf316a64aff5603f8e154'}`,
  // )
  // return response.data
  return {
    weather: [
      {
        id: 501,
        main: 'Rain',
        description: country,
        icon: '10d',
      },
    ],
    main: {
      temp: 298.48,
      // eslint-disable-next-line camelcase
      temp_min: 297.56,
      // eslint-disable-next-line camelcase
      temp_max: 300.05,
      pressure: 1015,
      humidity: 64,
    },
  }
}
