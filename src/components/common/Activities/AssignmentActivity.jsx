import { UserCircleIcon } from '@heroicons/react/20/solid'
import React from 'react'

/** 
 * Use the following for example:
 * 
const assignmentActivity = {
    id: 2,
    type: 'assignment',
    person: { name: 'Hilary Mahy', href: '#' },
    assigned: { name: 'Kristin Watson', href: '#' },
    date: '2d ago',
  }
*/

const AssignmentActivity = ({ person, assigned, date }) => {
  const PersonComponent = person.href ? 'a' : 'div'
  const { personName, ...personProps } = person

  const AssignedComponent = assigned.href ? 'a' : 'div'
  const { assignedName, ...assignedProps } = assigned

  return (
    <>
      <div>
        <div className="relative px-1">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
            <UserCircleIcon
              className="h-5 w-5 text-gray-600"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
      <div className="min-w-0 flex-1 py-1.5 px-3">
        <div className="text-sm text-gray-400">
          <PersonComponent
            {...personProps}
            className="font-medium text-purple-200"
          >
            {personName}
          </PersonComponent>{' '}
          assigned{' '}
          <AssignedComponent
            {...assignedProps}
            className="font-medium text-purple-200"
          >
            {assignedName}
          </AssignedComponent>{' '}
          <span className="whitespace-nowrap">{date}</span>
        </div>
      </div>
    </>
  )
}

export default AssignmentActivity
