"use client"

import * as React from "react"
import quantumLogo from "@/assets/quantum.svg"
import acmeLogo from "@/assets/acme-corp.svg"
import echoValleyLogo from "@/assets/echo-valley.svg"
import pulseLogo from "@/assets/pulse.svg"
import outsideLogo from "@/assets/outside.svg"
import apexLogo from "@/assets/apex.svg"
import celestialLogo from "@/assets/celestial.svg"
import twiceLogo from "@/assets/twice.svg"
import Image from "next/image"
import { motion } from "framer-motion"

const logos = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
]

export const LogoGrid = () => {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container">
        <h3 className="text-center text-white/50 text-xl">
          Already chosen by these Market Leader
        </h3>

        <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <motion.div
            animate={{
              x: "-50%",
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex flex-none gap-24 pr-24"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <React.Fragment key={i}>
                {logos.map((logo) => (
                  <Image
                    key={logo.name}
                    src={logo.image}
                    alt={logo.name}
                  />
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
