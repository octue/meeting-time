import React, { useState } from 'react'

import { RadioGroup } from '@headlessui/react'
import {
  CheckCircleIcon,
  MinusCircleIcon,
  PlusCircleIcon,
  QuestionMarkCircleIcon,
  XCircleIcon,
} from '@heroicons/react/24/solid'

import classNames from 'classnames'

const optionsByMode = {
  allowance: [
    { note: 'Add slots', icon: PlusCircleIcon, painting: 'allowed' },
    { note: 'Remove slots', icon: MinusCircleIcon, painting: 'disallowed' },
  ],
  availability: [
    { note: 'Usually free', icon: CheckCircleIcon, painting: 'available' },
    {
      note: 'Sometimes free / Could make it work',
      icon: QuestionMarkCircleIcon,
      painting: 'maybe',
    },
    { note: 'Unavailable', icon: XCircleIcon, painting: 'unavailable' },
  ],
}

export const defaultOptionsByMode = {
  allowance: optionsByMode.allowance[0],
  availability: optionsByMode.availability[0],
}

const Palette = ({ mode, value, onChange }) => {
  const options = optionsByMode[mode]
  return (
    <RadioGroup value={value} onChange={onChange} className="mt-2 flex-grow-0">
      <RadioGroup.Label className="sr-only">
        {' '}
        Choose the selection mode{' '}
      </RadioGroup.Label>
      <div className="grid grid-cols-2 gap-3">
        {options.map((option, idx) => (
          <RadioGroup.Option
            key={option.note}
            value={option}
            className={({ checked }) =>
              classNames(
                checked
                  ? 'bg-purple-200 border-transparent text-gray-700 hover:bg-purple-300 ring-1 ring-offset-1 ring-purple-100'
                  : 'bg-white text-gray-400 hover:bg-purple-300',
                'border rounded-md py-2 px-2 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'
              )
            }
          >
            <RadioGroup.Label
              as="span"
              className="flex flex-nowrap items-center whitespace-nowrap"
            >
              <option.icon className="w-6 h-6 mr-2" aria-hidden="true" />
              {option.note}
            </RadioGroup.Label>
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}

export default Palette
