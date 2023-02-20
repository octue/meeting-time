import * as React from 'react'

import SplashSvg from 'components/common/SplashSvg'

const Background = ({ children }) => {
  return (
    <div className="absolute w-full overflow-y-hidden h-full min-h-screen -z-20 bg-gray-900 shadow-2xl px-6 py-24 text-center sm:px-16">
      <SplashSvg />
    </div>
  )
}

export default Background
