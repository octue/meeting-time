import * as React from 'react'

import { Link } from 'gatsby'

import SplashSvg from 'components/SplashSvg'

const IndexPage = () => {
  return (
    <main>
      <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:px-16 h-screen">
        <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white">
          Find the best meeting time
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
          Bring people together for a recurring meeting. Find the time that's
          best for most people, working across multiple timezones. BOOM!
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/create"
            className="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Organise a recurring meeting <span aria-hidden="true">→</span>
          </Link>
          {/* <a
              href="#"
              className="text-base font-semibold leading-7 text-white"
            >
              Learn more 
            </a> */}
        </div>
        <SplashSvg />
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Recurring meetings</title>
