import * as React from 'react'

import {
  CalendarDaysIcon,
  PencilSquareIcon,
  UserIcon,
} from '@heroicons/react/24/solid'

import Activities from 'components/common/Activities'
import Calendar from 'components/common/Calendar'
import Loader from 'components/common/Loader'

const activities = [
  {
    id: 1,
    type: 'note',
    heading: { text: 'Add your name', href: '#' },
    note: "So people will know who created the meeting. We don't ask for your email address so you won't get notifications, but you can check back at any time.",
    IconComponent: UserIcon,
  },
  {
    id: 2,
    type: 'note',
    heading: { text: 'Add summary', href: '#' },
    note: 'Describe the name and purpose of the meeting, with any other details (like "this will happen on the first week of each month").',
    IconComponent: PencilSquareIcon,
  },
  {
    id: 3,
    type: 'note',
    heading: { text: 'Set initial availability', href: '#' },
    note: 'Choose the times in the week that the meeting could take place. Participants in the poll will rate these time slots on how convenient they are.',
    IconComponent: CalendarDaysIcon,
  },
]

const Times = () => {
  console.log(
    'RESOLVED TIMEZONE:',
    Intl.DateTimeFormat().resolvedOptions().timeZone
  )
  return (
    <>
      <Loader />
      <div className="text-left flex items-center justify-evenly">
        <div className="max-w-sm">
          <Activities activities={activities} />
        </div>
        <div className="max-w-md">
          <Calendar />
        </div>
      </div>
    </>
  )
}

export default Times
