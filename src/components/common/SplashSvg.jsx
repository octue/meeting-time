import * as React from 'react'

const SplashSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
      aria-hidden="true"
    >
      <circle
        cx={512}
        cy={512}
        r={512}
        fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
        fillOpacity="0.7"
      />
      <defs>
        <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
          <stop stopColor="#7775D6" />
          <stop offset={1} stopColor="#E935C1" />
        </radialGradient>
      </defs>
    </svg>
  )
}

export default SplashSvg
