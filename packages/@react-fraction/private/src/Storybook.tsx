import { Children, ReactElement, ReactNode } from "react"

export interface StoryWrapperProps {
  /**
   * The components of Story.
   */
  children: ReactNode
  /**
   * The type of Story.
   */
  type: "controls" | "demos" | "hooks"
}

export function StoryWrapper({
  children,
  type,
}: StoryWrapperProps): ReactElement {
  return (
    <div className="mt-10" role="presentation">
      <div className="text-xl text-black dark:text-white border-b-2 border-black dark:border-white">
        {type.slice(0, 1).toUpperCase()}
        {type.slice(1)}
      </div>
      <div className="py-5 flex">
        {Children.map(children, (child) => {
          return <div className="ml-5 first:ml-0">{child}</div>
        })}
      </div>
    </div>
  )
}
