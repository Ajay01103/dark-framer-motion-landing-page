import { cn } from "@/lib/cn"
import React, { HTMLAttributes } from "react"

export const Key = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...otherProps } = props
  return (
    <div
      className={cn(
        "size-14 bg-neutral-300 inline-flex items-center justify-center rounded-2xl text-xl text-neutral-950 font-medium",
        className
      )}
      {...otherProps}
    >
      {children}
    </div>
  )
}
