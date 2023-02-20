import React from 'react'

const Filled = ({
  children,
  className = '',
  Component = 'button',
  ...props
}) => {
  return (
    <Component
      {...props}
      className={`
        rounded-md
        px-3.5
        py-1.5
        leading-7 
      bg-purple-200 
      hover:bg-purple-100  
      disabled:bg-gray-200 
      disabled:hover:bg-gray-200 
        font-semibold 
        text-base
      text-gray-700 
      disabled:text-gray-400
        shadow-sm  
        focus-visible:outline
        focus-visible:outline-2
        focus-visible:outline-offset-2
      focus-visible:outline-purple-100
        ${className}`}
    >
      {children}
    </Component>
  )
}

export default Filled
