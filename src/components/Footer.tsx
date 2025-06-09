import React from 'react'
import { ModeToggle } from './mode-toggle'

const Footer = () => {
  return (
    <footer className='col-span-12 flex items-center justify-center py-8'>
      <p className="mr-4">© 2025 JournalMind. All rights reserved.</p>
      <ModeToggle />
    </footer>
  )
}

export default Footer
