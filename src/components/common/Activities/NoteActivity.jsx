import React from 'react'

/** 
 * Use the following for example:
 * 
const noteActivity = {
    date: '6d ago', // optional
    heading: { text: 'Add your name', href: '#' }, // href is optional
    note: "So people will know who created the meeting. We don't ask for your email address so you won't get endless notifications, but you can check back at any time for the status of the meeting.",
    IconComponent: InformationCircleIcon,
  },
*/

const NoteActivity = ({ heading, note, date, IconComponent }) => {
  const HeadingComponent = heading.href ? 'a' : 'div'
  const { text: headingText, ...headingProps } = heading
  return (
    <>
      <div>
        <div className="relative px-1">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
            <IconComponent
              className="h-5 w-5 text-gray-600"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
      <div className="min-w-0 flex-1 py-1.5 px-3">
        <div>
          <div className="text-sm">
            <HeadingComponent
              {...headingProps}
              className="font-medium text-purple-200"
            >
              {headingText}
            </HeadingComponent>{' '}
            <p className="mt-0.5 text-sm text-gray-200">{date}</p>
          </div>

          <div className="mt-2 text-sm text-gray-400">
            <p>{note}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default NoteActivity
