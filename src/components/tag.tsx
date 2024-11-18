import { cn } from "@/lib/cn"
import React, { HTMLAttributes } from "react"

export const Tag = (props: HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...otherProps } = props
  return (
    <div
      className={cn(
        "inline-flex border border-lime-400 gap-2 text-lime-400 px-3 py-1 rounded-full uppercase items-center",
        className
      )}
    >
      <span>&#10038;</span>
      <span className="text-sm">{children}</span>
    </div>
  )
}
