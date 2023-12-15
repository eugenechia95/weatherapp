export type WeatherRequest = WeatherDataRequest & {
  timestamp: Date
}

export type WeatherDataRequest = {
  country: string
  city: string
}

export type WeatherResponse = {
  weather: {
    id: number
    main: string
    description: string
    icon: string
  }[]
  main: {
    temp: number
    temp_min: number
    temp_max: number
    humidity: number
  }
  name: string
  sys: {
    country: string
  }
}
