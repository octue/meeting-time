import React, { useMemo, useState } from 'react'

import { CalendarDaysIcon } from '@heroicons/react/24/solid'
import { InformationCircleIcon } from '@heroicons/react/24/solid'
import { UserPlusIcon } from '@heroicons/react/24/solid'

import useStepper from 'hooks/useStepper'

import Background from 'components/common/Background'
import FilledButton from 'components/common/buttons/Filled'
import Details from 'components/create/Details'
import Share from 'components/create/Share'
import Stepper from 'components/create/Stepper'
import Times from 'components/create/Times'

const baseSteps = [
  {
    id: 0,
    name: 'Set meeting details',
    status: 'complete',
    Icon: InformationCircleIcon,
  },
  {
    id: 1,
    name: 'Set available times',
    status: 'current',
    Icon: CalendarDaysIcon,
  },
  { id: 2, name: 'Invite people', status: 'upcoming', Icon: UserPlusIcon },
]

const CreatePage = () => {
  const { activeId, steps, isLast, progress } = useStepper(baseSteps)

  const meetingCode = 'abc123'

  return (
    <main className="relative">
      <Background />
      <div className="relative px-6 py-1 text-center sm:px-16">
        {/* <Stepper steps={steps} /> */}
        <div className="mt-16">
          <Details className={activeId === 1 ? '' : 'hidden'} />
          <Times className={activeId === 2 ? '' : 'hidden'} />
          <Share className={activeId === 3 ? '' : 'hidden'} />
        </div>
        <div className="flex justify-end">
          <FilledButton onClick={progress}>
            Next <span aria-hidden="true">→</span>
          </FilledButton>
        </div>
      </div>
      {/* <JoinBanner meetingCode={meetingCode} /> */}
    </main>
  )
}

export default CreatePage

export const Head = () => <title>Create a meeting</title>
