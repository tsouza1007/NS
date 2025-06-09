import React from 'react'

type GridContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  children: React.ReactNode,
  className?: string, //optional
}
const GridContainer = ({ children, className, ...rest }: GridContainerProps) => {
  return (
    <main className={`max-w-[1440px] mx-20 grid min-h-screen space-y-40 grid-cols-12 gap-6  ${className}`} {...rest}>
      {children}
    </main>
  )
}
export default GridContainer
 