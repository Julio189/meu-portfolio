'use client'
import { FilterContext } from '@/contexts/FilterContext'
import { useContext } from 'react'

export const useFilter = () => {
  return useContext(FilterContext)
}
