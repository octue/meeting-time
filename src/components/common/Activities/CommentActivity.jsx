import {
  ChatBubbleLeftEllipsisIcon,
  TagIcon,
  UserCircleIcon,
} from '@heroicons/react/20/solid'
import * as React from 'react'
import { Fragment } from 'react'

/** 
 * Activity can have very rich data, although we don't use it all in this app.
 * Use the following for example:
 * 
const activity = [
  {
    id: 1,
    type: 'comment',
    person: { name: 'Eduardo Benz', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ',
    date: '6d ago',
  },
  {
    id: 2,
    type: 'assignment',
    person: { name: 'Hilary Mahy', href: '#' },
    assigned: { name: 'Kristin Watson', href: '#' },
    date: '2d ago',
  },
  {
    id: 3,
    type: 'tags',
    person: { name: 'Hilary Mahy', href: '#' },
    tags: [
      { name: 'Bug', color: 'bg-rose-500' }, // No href makes it a vanilla div, not a link
      { name: 'Accessibility', href: '#', color: 'bg-indigo-500' },
    ],
    date: '6h ago',
  },
  {
    id: 4,
    type: 'comment',
    person: { name: 'Jason Meyers', href: '#' },
    imageUrl:
      'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
    comment:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.',
    date: '2h ago',
  },
]
*/

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const CommentActivity = ({ imageUrl, date, person, comment }) => {
  const PersonComponent = person.href ? 'a' : 'div'
  const { personName, ...personProps } = person
  return (
    <>
      <div className="relative">
        <img
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
          src={imageUrl}
          alt=""
        />
      </div>
      <div className="min-w-0 flex-1 px-3">
        <div>
          <div className="text-sm">
            <PersonComponent
              {...personProps}
              className="font-medium text-purple-200"
            >
              {personName}
            </PersonComponent>
          </div>
          <p className="mt-0.5 text-sm text-gray-200">Commented {date}</p>
        </div>
        <div className="mt-2 text-sm text-gray-400">
          <p>{comment}</p>
        </div>
      </div>
    </>
  )
}

export default CommentActivity
