import * as React from 'react'

import Background from 'components/common/Background'

const NotFoundPage = () => {
  return (
    <Background>
      <div className="min-h-full py-16 px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="mx-auto max-w-max">
          <main className="sm:flex">
            <p className="text-4xl font-bold tracking-tight text-purple-200 sm:text-5xl">
              404
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-bold tracking-tight text-gray-50 sm:text-5xl">
                  Page not found
                </h1>
                <p className="mt-1 text-base text-gray-300">
                  Please check the URL in the address bar and try again.
                </p>
              </div>
              <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                <a
                  href="/"
                  className="inline-flex items-center rounded-md border border-transparent bg-purple-200 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Go back home
                </a>
              </div>
            </div>
          </main>
        </div>
      </div>
    </Background>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
