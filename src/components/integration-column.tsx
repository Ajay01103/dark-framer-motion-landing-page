"use client"

import { cn } from "@/lib/cn"
import Image from "next/image"
import { motion } from "framer-motion"
import * as React from "react"

interface Props {
  integrations: {
    name: string
    icon: string
    description: string
  }[]
  className?: string
  reverse?: boolean
}

export const IntegrationColumns = ({ integrations, className, reverse }: Props) => {
  return (
    <motion.div
      initial={{
        y: reverse ? "-50%" : 0,
      }}
      animate={{
        y: reverse ? 0 : "-50%",
      }}
      transition={{
        duration: 25,
        repeat: Infinity,
        ease: "linear",
      }}
      className={cn("flex flex-col gap-4 pb-4", className)}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <React.Fragment key={i}>
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
            >
              <div className="flex justify-center">
                <Image
                  src={integration.icon}
                  alt={integration.name}
                  className="size-24"
                />
              </div>
              <h3 className="text-3xl text-center mt-6">{integration.name}</h3>
              <p className="text-center text-white/50 mt-2">
                {integration.description}
              </p>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  )
}
