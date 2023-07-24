import React from 'react'
import './globals.css'
import { Poppins } from 'next/font/google'
import { FilterContextProvider } from '@/contexts/FilterContext'

const inter = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
})

export const metadata = {
  title: 'Portfólio',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="text-textColor">
      <body className={inter.className}>
        <FilterContextProvider>{children}</FilterContextProvider>
      </body>
    </html>
  )
}
