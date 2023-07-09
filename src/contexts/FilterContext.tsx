'use client'
import { ReactNode, createContext, useState } from 'react'
import { FilterType } from '../types/FilterType'

export const FilterContext = createContext({
  type: FilterType.SKILLS,
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  setType: (value: FilterType) => {},
})

interface ProviderProps {
  children: ReactNode
}

export function FilterContextProvider({ children }: ProviderProps) {
  const [type, setType] = useState(FilterType.SKILLS)
  return (
    <FilterContext.Provider value={{ type, setType }}>
      {children}
    </FilterContext.Provider>
  )
}
