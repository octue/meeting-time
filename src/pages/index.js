import * as React from 'react'

import { ArrowPathIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { Link } from 'gatsby'

import Background from 'components/common/Background'

const features = [
  {
    name: 'For Recurring Meetings',
    description:
      "Find the time that's best for most people, working across multiple timezones.",
    icon: ArrowPathIcon,
  },
  {
    name: 'No personal data',
    description:
      "No privacy issues, because there's no need to login or submit any personal data.",
    icon: LockClosedIcon,
  },
]

const IndexPage = () => {
  return (
    <main className="relative">
      <Background />
      <div className="relative px-6 py-24 text-center sm:px-16">
        <h2 className="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white">
          Find the best recurring meeting time
        </h2>
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 mb-16 sm:mb-20 lg:mb-24 max-w-2xl lg:max-w-4xl px-6 lg:px-8">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base text-left font-semibold leading-7 text-purple-200">
                  <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-200">
                    <feature.icon
                      className="h-6 w-6 text-gray-700"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base text-left leading-7 text-gray-50">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/create"
            className="rounded-md bg-purple-200 px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-700 shadow-sm hover:bg-purple-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Organise a recurring meeting <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Recurring meetings</title>
