import React, { useCallback, useMemo, useState } from 'react'

/**
 * Manages a stepper component by injecting a 'status' value into the items as well as providing callbacks
 * for progressing and regressing (going foward and backward a step).
 *
 * Initial steps should be an array of objects which have an id field, and will look something like this:
 *
 * const initial = [
 *   { id: 1, name: 'Set meeting details' },
 *   { id: 2, name: 'Set available times' },
 *   { id: 3, name: 'Invite people' },
 * ]
 */

const useStepper = (initial) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeId = initial[activeIndex].id

  const isFirst = activeIndex === 0

  const isLast = activeIndex === initial.length - 1

  const progress = useCallback(() => {
    if (isLast) {
      console.error('Attempted to progress beyond last stepper')
    } else {
      setActiveIndex(activeIndex + 1)
    }
  }, [isLast, activeIndex, setActiveIndex])

  const regress = useCallback(() => {
    if (isFirst) {
      console.error('Attempted to regress beyond first stepper')
    } else {
      setActiveIndex(activeIndex - 1)
    }
  }, [isLast, activeIndex, setActiveIndex])

  const steps = useMemo(() => {
    return initial.map((item) => {
      let status
      if (item.id < activeIndex) {
        status = 'complete'
      } else if (item.id === activeIndex) {
        status = 'current'
      } else {
        status = 'upcoming'
      }
      return { ...item, status }
    })
  }, [activeId, initial])

  return useMemo(
    () => ({
      activeId,
      activeIndex,
      isFirst,
      isLast,
      progress,
      regress,
      steps,
    }),
    [activeId, activeIndex, isFirst, isLast, progress, regress, steps]
  )
}

export default useStepper
