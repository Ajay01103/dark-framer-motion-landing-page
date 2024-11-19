import { Button } from "./button"

import designExample1 from "@/assets/design-example-1.png"
import designExample2 from "@/assets/design-example-2.png"
import Image from "next/image"
import { Pointer } from "./pointer"

export const Hero = () => {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container relative">
        <div className="absolute -left-32 top-16 hidden lg:block">
          <Image
            src={designExample1}
            alt="ex1"
          />
        </div>

        <div className="absolute -right-64 -top-16 hidden lg:block">
          <Image
            src={designExample2}
            alt="ex2"
          />
        </div>

        <div className="absolute left-56 top-96 hidden lg:block">
          <Pointer
            name="Andrea"
            color="blue"
          />
        </div>

        <div className="absolute right-80 -top-4 hidden lg:block">
          <Pointer
            name="Billy"
            color="red"
          />
        </div>

        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ $7.5M seed round raised
          </div>
        </div>

        {/* prev values in h1 = md:text-7xl lg:text-7xl */}
        <h1 className="text-6xl md:text-7xl xl:text-8xl font-medium text-center mt-6">
          Impactful design created efforlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          Design tools should'nt slow you dowm. Layers combine powerful features with
          an intutiative interface that keeps you in your creative flow
        </p>

        <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 md:flex-1 w-full focus:outline-none"
          />
          <Button
            type="submit"
            variant="primary"
            className="whitespace-nowrap"
            size="sm"
          >
            Sign up
          </Button>
        </form>
      </div>
    </section>
  )
}