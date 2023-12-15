import { getWeatherData } from './api'
import { useQuery, UseQueryResult } from '@tanstack/react-query'
import { WeatherDataRequest, WeatherRequest, WeatherResponse } from './types'

export const useWeatherDataHook = ({
  country,
  city,
}: WeatherDataRequest): UseQueryResult<WeatherResponse> => {
  return useQuery({
    queryKey: ['weatherData', { country, city }],
    queryFn: getWeatherData,
    enabled: !!country && !!city,
    retry: 0,
  })
}
