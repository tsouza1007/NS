'use client'

import React from 'react'
import LoginForm from '@/components/auth/LoginForm'
import { Inter } from 'next/font/google'
//import { ThemeProvider } from '@/components/theme-provider'
import '@/app/globals.css'
import { ModeToggle } from '@/components/mode-toggle'

const inter = Inter({ subsets: ['latin'] })

const LoginPage: React.FC = () => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
       
          <div className="fixed top-4 right-4 z-50">
            <ModeToggle />
          </div>
          {/* <div className="grid grid-cols-12 min-h-screen w-full px-4 sm:px-[50px] bg-transparent"> */}
            <div className="col-span-12 flex min-h-screen justify-center items-center">
              <LoginForm />
            </div>
          {/* </div> */}
        
      </body>
    </html>
  )
}

export default LoginPage
