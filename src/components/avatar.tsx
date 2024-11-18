import { cn } from "@/lib/cn"
import React, { HTMLAttributes } from "react"

export const Avatar = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...otherProps } = props
  return (
    <div
      className={cn(
        "size-20 rounded-full overflow-hidden border-4 border-blue-500 p-1 bg-neutral-900",
        className
      )}
    >
      {children}
    </div>
  )
}
