import { Tag } from "./tag"

export const Introduction = () => {
  const text =
    "You're racing to create exceptional work, but traditional design tool slow you down with unnecessary complexity and steep learning curves"
  return (
    <section className="py-28 lg:py-40">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Introducing Layers</Tag>
        </div>

        <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
          <span>Your creative process deserves better.</span>{" "}
          <span className="text-white/15">{text}</span>
          <span className="text-lime-400 block">That's why we built Layers.</span>
        </div>
      </div>
    </section>
  )
}