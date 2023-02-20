import { CheckCircleIcon } from '@heroicons/react/24/solid'
import * as React from 'react'

/**
 * Use steps like:
 * const steps = [
 *   { id: '01', name: 'Job details', href: '#', status: 'complete' },
 *   { id: '02', name: 'Application form', href: '#', status: 'current' },
 *   { id: '03', name: 'Preview', href: '#', status: 'upcoming' },
 * ]
 */

const Stepper = ({ steps }) => {
  return (
    <nav aria-label="Progress">
      <ol className="divide-y divide-gray-400 rounded-md border border-gray-600 md:flex md:divide-y-0">
        {steps.map((step, stepIdx) => {
          return (
            <li key={step.name} className="relative md:flex md:flex-1">
              {step.status === 'complete' ? (
                <div className="group flex w-full items-center">
                  <span className="flex items-center px-6 py-4 text-sm font-medium">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-400">
                      <CheckCircleIcon
                        className="h-6 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-400">
                      {step.name}
                    </span>
                  </span>
                </div>
              ) : step.status === 'current' ? (
                <div
                  className="flex items-center px-6 py-4 text-sm font-medium"
                  aria-current="step"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-200">
                    <step.Icon
                      className="h-6 w-6 text-gray-800"
                      aria-hidden="true"
                    />
                  </span>
                  <span className="ml-4 text-sm font-semibold text-purple-200">
                    {step.name}
                  </span>
                </div>
              ) : (
                <div className="group flex items-center">
                  <span className="flex items-center px-6 py-4 text-sm font-medium">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-gray-400">
                      <step.Icon
                        className="h-6 w-6 text-gray-400"
                        aria-hidden="true"
                      />
                    </span>
                    <span className="ml-4 text-sm font-medium text-gray-400">
                      {step.name}
                    </span>
                  </span>
                </div>
              )}

              {stepIdx !== steps.length - 1 ? (
                <>
                  {/* Arrow separator for lg screens and up */}
                  <div
                    className="absolute top-0 right-0 hidden h-full w-5 md:block"
                    aria-hidden="true"
                  >
                    <svg
                      className="h-full w-full text-gray-300"
                      viewBox="0 0 22 80"
                      fill="none"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 -2L20 40L0 82"
                        vectorEffect="non-scaling-stroke"
                        stroke="currentcolor"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </>
              ) : null}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Stepper
