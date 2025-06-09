import Link from 'next/link'
import React from 'react'

const page = () => {
    const constructedLink = "/journals/1"
  return (
    <div>
        <Link href={constructedLink} className="text-blue-500 hover:underline">
            Go to Journal 1
        </Link>
    </div>
  )
}

export default page