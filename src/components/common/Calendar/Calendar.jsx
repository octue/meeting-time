import { Fragment } from 'react'
import React, { useEffect, useState } from 'react'

import { Menu, Transition } from '@headlessui/react'
import {
  CalendarIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisHorizontalIcon,
  MapPinIcon,
} from '@heroicons/react/20/solid'

import Palette, { defaultOptionsByMode } from './Palette'
import SlotGrid from './SlotGrid'

import { DAYS } from 'constants'

const Calendar = () => {
  const mode = 'allowance'
  const [paletteOption, setPaletteOption] = useState(defaultOptionsByMode[mode])

  // Reset the painting option to default for the mode when changing mode
  useEffect(() => {
    setPaletteOption(defaultOptionsByMode[mode])
  }, [mode, setPaletteOption])

  return (
    <>
      <div className="flex w-full justify-end">
        <div className="w-[342px]">
          <Palette
            value={paletteOption}
            onChange={setPaletteOption}
            mode={mode}
          />
        </div>
      </div>
      <div className="mt-6 flex justify-end text-sm text-center leading-6 text-purple-200">
        {DAYS.map((day, dayIdx) => (
          <div key={`day-label-${dayIdx}`} className="w-12 mr-1px">
            {day[0]}
          </div>
        ))}
      </div>
      <SlotGrid mode={mode} painting={paletteOption.painting} />
    </>
  )
}

export default Calendar

/* Month selector
<div className="flex items-center text-gray-900">
<button
  type="button"
  className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
>
  <span className="sr-only">Previous month</span>
  <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
</button>
<div className="flex-auto font-semibold">January</div>
<button
  type="button"
  className="-m-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
>
  <span className="sr-only">Next month</span>
  <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
</button>
</div>
*/
