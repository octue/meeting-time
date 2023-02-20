import {
  ChatBubbleLeftEllipsisIcon,
  TagIcon,
  UserCircleIcon,
} from '@heroicons/react/20/solid'
import * as React from 'react'
import { Fragment } from 'react'

import AssignmentActivity from './AssignmentActivity'
import CommentActivity from './CommentActivity'
import NoteActivity from './NoteActivity'
import TagActivity from './TagActivity'

/** 
 * Activities can have very rich data, although we don't use it all in this app.
 * Use the following for example:
 * 
const activities = [
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

const Activities = ({ activities }) => {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {activities.map((activity, activityIdx) => (
          <li key={activity.id}>
            <div className="relative pb-8">
              {activityIdx !== activities.length - 1 ? (
                <span
                  className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex items-start space-x-3">
                {activity.type === 'comment' ? (
                  <CommentActivity
                    imageUrl={activity.imageUrl}
                    person={activity.person}
                    date={activity.date}
                    comment={activity.comment}
                  />
                ) : activity.type === 'note' ? (
                  <NoteActivity
                    heading={activity.heading}
                    note={activity.note}
                    date={activity.date}
                    IconComponent={activity.IconComponent}
                  />
                ) : activity.type === 'assignment' ? (
                  <AssignmentActivity
                    person={activity.person}
                    assigned={activity.assigned}
                    date={activity.date}
                  />
                ) : activity.type === 'tags' ? (
                  <TagActivity
                    id={activity.id}
                    date={activity.date}
                    person={activity.person}
                    tags={activity.tags}
                  />
                ) : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Activities
