import React from 'react'

const Loader = ({ loading }) => {
  let circleCommonClasses = 'h-4 w-4 bg-gray-700 rounded-full'
  return loading ? (
    <div class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-purple-200 opacity-75 flex flex-col items-center justify-center">
      <div className="flex">
        <div className={`${circleCommonClasses} mr-3 animate-bounce`}></div>
        <div className={`${circleCommonClasses} mr-3 animate-bounce200`}></div>
        <div className={`${circleCommonClasses} animate-bounce400`}></div>
      </div>
    </div>
  ) : null
}

export default Loader
