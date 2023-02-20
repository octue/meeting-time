import React, {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'

import {
  boxesIntersect,
  useSelectionContainer,
} from '@air/react-drag-to-select'
import { ScrollContext } from 'gatsby-react-router-scroll'
import { produce } from 'immer'
import set from 'lodash.set'

import ind2sub from 'utilities/ind2sub'
import sub2ind from 'utilities/sub2ind'

import classNames from 'classnames'
import { DAYS, SIZES, TIMES } from 'constants'

const selectionProps = {
  style: {
    position: 'absolute',
    // Uncomment to visualise selection area for debugging
    // zIndex: 10,
    // border: '2px grey',
    // borderRadius: 8,
    // backgroundColor: 'grey',
    // opacity: 0.5,
  },
}

const availabilityClassMap = {
  allowed: {
    selected: {
      bg: {
        available: 'bg-green-400',
        unavailable: 'bg-red-400',
        maybe: 'bg-yellow-400',
      },
      text: {
        available: 'text-green-600',
        unavailable: 'text-red-600',
        maybe: 'text-yellow-600',
      },
    },
    normal: {
      bg: {
        available: 'bg-green-300',
        unavailable: 'bg-red-300',
        maybe: 'bg-yellow-300',
        unknown: 'bg-white',
      },
      text: {
        available: 'text-green-600',
        unavailable: 'text-red-600',
        maybe: 'text-yellow-600',
        unknown: 'text-gray-600',
      },
    },
  },
  disallowed: {
    selected: {
      bg: {
        available: 'bg-gray-200',
        unavailable: 'bg-gray-200',
        maybe: 'bg-gray-200',
      },
      text: {
        available: 'text-gray-400',
        unavailable: 'text-gray-400',
        maybe: 'text-gray-400',
      },
    },
    normal: {
      bg: {
        available: 'bg-gray-100',
        unavailable: 'bg-gray-100',
        maybe: 'bg-gray-100',
        unknown: 'bg-gray-100',
      },
      text: {
        available: 'text-gray-300',
        unavailable: 'text-gray-300',
        maybe: 'text-gray-300',
        unknown: 'text-gray-300',
      },
    },
  },
}

/**
 * Class selection map for the allowance mode:
 *  - selected while painting disallowed
 *  - selected while painting allowed
 *  - normal existing allowed
 *  - normal existing disallowed (default)
 */
const allowanceClassMap = {
  selected: {
    // Painting
    allowed: {
      bg: 'bg-green-400',
      text: 'bg-green-600',
    },
    // Painting
    disallowed: {
      bg: 'bg-gray-200',
      text: 'text-gray-500',
    },
  },
  normal: {
    // Existing
    allowed: {
      bg: 'bg-green-500',
      text: 'text-green-600',
    },
    // Existing (This is default)
    disallowed: {
      bg: 'bg-gray-100',
      text: 'text-gray-300',
    },
  },
}

const Slot = ({ timeIdx, dayIdx, painting, existing, status }) => {
  const { significant } = TIMES[timeIdx]
  const value = status === 'selected' ? painting : existing
  const bgClass = allowanceClassMap[status][value].bg
  const textClass = allowanceClassMap[status][value].text
  const classes = classNames(
    'h-3 w-12 overflow-visible border-x-0 border-b-0 m-0',
    bgClass,
    textClass,
    {
      'border-t-2': significant,
      'rounded-tl-lg': timeIdx === 0 && dayIdx === 0,
      'rounded-tr-lg': timeIdx === 0 && dayIdx === 6,
      'rounded-bl-lg': timeIdx === 48 && dayIdx === 0,
      'rounded-br-lg': timeIdx === 48 && dayIdx === 6,
    }
  )
  return (
    <div className={classes}>{/* <p className="select-none">{show}</p> */}</div>
  )
}

const getInitialStateForMode = (mode) => {
  const initialState = {}
  for (let dayIdx = 0; dayIdx < SIZES[0]; dayIdx++) {
    for (let timeIdx = 0; timeIdx < SIZES[1]; timeIdx++) {
      if (mode === 'allowance') {
        set(initialState, [dayIdx, timeIdx], {
          status: 'normal',
          allowance: 'disallowed',
        })
      } else if (mode === 'availability') {
        set(initialState, [dayIdx, timeIdx], {
          status: 'normal',
          availability: 'unknown',
        })
      } else {
        console.error('Mode value must be "allowance" or "availability"')
      }
    }
  }
  return initialState
}

const initialAllowanceState = getInitialStateForMode('allowance')

const SlotGrid = ({ mode, painting }) => {
  const [selection, setSelection] = useState(initialAllowanceState)
  const selectableItems = useRef([])
  const elementsContainerRef = useRef(null)

  const state = useContext(ScrollContext)
  console.log('SCROLL STATE', state)

  console.log('HEY MR WINDOW', window.scrollY)
  const { DragSelection } = useSelectionContainer({
    eventsElement: document.getElementById('sortGridContainer'),
    onSelectionChange: (box) => {
      console.log('MR WINDOW', window.scrollY)
      const scrollAwareBox = {
        ...box,
        top: box.top + window.scrollY,
        left: box.left + window.scrollX,
      }
      setSelection(
        produce(selection, (draft) => {
          selectableItems.current.forEach((item, index) => {
            const sub = ind2sub(SIZES, index)
            if (boxesIntersect(scrollAwareBox, item)) {
              set(draft, [sub[0], sub[1], 'status'], 'selected')
            } else {
              set(draft, [sub[0], sub[1], 'status'], 'normal')
            }
          })
        })
      )
    },
    onSelectionEnd: () => {
      setSelection(
        produce(selection, (draft) => {
          selectableItems.current.forEach((item, index) => {
            const sub = ind2sub(SIZES, index)
            if (draft[sub[0]][sub[1]].status === 'selected') {
              set(draft, [sub[0], sub[1], 'status'], 'normal')
              set(draft, [sub[0], sub[1], mode], painting)
            }
          })
        })
      )
    },
    selectionProps,
    isEnabled: true,
  })

  // Update state to contain selectable items, using the bounding rectangle of each child
  useEffect(() => {
    if (elementsContainerRef.current) {
      Array.from(elementsContainerRef.current.children).forEach((item) => {
        const { left, top, width, height } = item.getBoundingClientRect()
        selectableItems.current.push({
          left,
          top,
          width,
          height,
        })
      })
    }
  }, [])

  return (
    <div className="relative flex">
      <div id="timeLabelContainer max-h-full -mt-2">
        {TIMES.map((time, timeIdx) => {
          return (
            <div
              key={`time-label-${timeIdx}`}
              className=" h-3 overflow-visible text-white text-right mr-3"
            >
              {time.significant ? time.show : null}
            </div>
          )
        })}
      </div>

      <div id="sortGridContainer">
        <DragSelection />
        <div
          ref={elementsContainerRef}
          className="relative isolate mt-2 grid grid-cols-7 gap-x-px rounded-lg bg-gray-200 text-sm shadow ring-4 ring-gray-200"
        >
          {TIMES.map((_, timeIdx) => {
            return (
              <Fragment key={`fragment-${timeIdx}`}>
                {DAYS.map((_, dayIdx) => (
                  <Slot
                    key={`slot-${timeIdx}-${dayIdx}`}
                    timeIdx={timeIdx}
                    dayIdx={dayIdx}
                    status={selection[dayIdx]?.[timeIdx]?.status}
                    painting={painting}
                    existing={selection[dayIdx]?.[timeIdx]?.allowance}
                  ></Slot>
                ))}
              </Fragment>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SlotGrid
