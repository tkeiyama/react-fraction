import { ReactElement, ReactNode } from "react"
import { useTheme } from "react-hook-tailwind-darkmode"

export interface StoryWrapperProps {
  /**
   * The content of a component.
   */
  children: ReactNode
}

export function StoryGlobalWrapper({
  children,
}: StoryWrapperProps): ReactElement {
  const { changeTheme } = useTheme()

  return (
    <div className="w-auto min-w-max h-auto min-h-screen pt-7 pl-5 dark:bg-dark-not-black">
      <header className="flex flex-col">
        <button
          className="w-2/12 text-black dark:text-white p-1 rounded-xl border-2 border-black dark:border-white"
          onClick={() => changeTheme()}
        >
          CHANGE THEME
        </button>
      </header>
      <main>{children}</main>
    </div>
  )
}
