import { TagIcon } from '@heroicons/react/20/solid'
import * as React from 'react'
import { Fragment } from 'react'

/** 
 * Use the following for example:
 * 
const tagActivity = {
    id: 3,
    person: { name: 'Hilary Mahy', href: '#' },
    tags: [
      { name: 'Bug', color: 'bg-rose-500' }, // No href makes it a vanilla div, not a link
      { name: 'Accessibility', href: '#', color: 'bg-indigo-500' },
    ],
    date: '6h ago',
  }
]
*/

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const TagActivity = ({ id, person, tags, date }) => {
  const PersonComponent = person.href ? 'a' : 'div'
  const { personName, ...personProps } = person
  return (
    <>
      <div>
        <div className="relative px-1">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-100 ring-8 ring-purple-100 ">
            <TagIcon className="h-5 w-5 text-gray-600" aria-hidden="true" />
          </div>
        </div>
      </div>
      <div className="min-w-0 flex-1 py-0 px-3">
        <div className="text-sm leading-8 text-gray-200">
          <span className="mr-0.5">
            <PersonComponent
              {...personProps}
              className="font-medium text-purple-100"
            >
              {personName}
            </PersonComponent>{' '}
            added tags
          </span>{' '}
          <span className="mr-0.5">
            {tags.map((tag) => {
              const TagComponent = tag.href ? 'a' : 'div'
              return (
                <Fragment key={tag.name}>
                  <TagComponent
                    href={tag.href}
                    className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                  >
                    <span className="absolute flex flex-shrink-0 items-center justify-center">
                      <span
                        className={classNames(
                          tag.color,
                          'h-1.5 w-1.5 rounded-full'
                        )}
                        aria-hidden="true"
                      />
                    </span>
                    <span className="ml-3.5 font-medium text-gray-100">
                      {tag.name}
                    </span>
                  </TagComponent>{' '}
                </Fragment>
              )
            })}
          </span>
          <span className="whitespace-nowrap">{date}</span>
        </div>
      </div>
    </>
  )
}

export default TagActivity
