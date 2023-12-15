import React, { createContext, Dispatch, SetStateAction, useState } from 'react'

export type AppContextType = {
  country: string
  setCountry: Dispatch<SetStateAction<string>>
  city: string
  setCity: Dispatch<SetStateAction<string>>
  timestamp: Date
  setTimestamp: Dispatch<SetStateAction<Date>>
}
export const AppContext = createContext<AppContextType | null>(null)
export const AppContextProvider = ({ children }: any) => {
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [timestamp, setTimestamp] = useState(new Date())

  return (
    <AppContext.Provider
      value={{
        country,
        setCountry,
        city,
        setCity,
        timestamp,
        setTimestamp,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
