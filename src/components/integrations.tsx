import { Tag } from "./tag"
import figmaIcon from "@/assets/figma-logo.svg"
import NotionIcon from "@/assets/notion-logo.svg"
import SlackIcon from "@/assets/slack-logo.svg"
import RelumeIcon from "@/assets/relume-logo.svg"
import FramerIcon from "@/assets/framer-logo.svg"
import GithubIcon from "@/assets/github-logo.svg"
import Image from "next/image"
import { IntegrationColumns } from "./integration-column"

const integrations = [
  {
    name: "Figma",
    icon: figmaIcon,
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: NotionIcon,
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: SlackIcon,
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: RelumeIcon,
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: FramerIcon,
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    icon: GithubIcon,
    description: "GitHub is the leading platform for code collaboration.",
  },
]

export const Integrations = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <Tag>Integrations</Tag>
            <h2 className="text-6xl font-medium mt-6">
              Plays well with <span className="text-lime-400">others</span>
            </h2>

            <p className="text-white/50 mt-4 text-lg">
              Layers seamlessly connects with your favourite tools, making it easy to
              plug into any workflow and collaborate across platforms.
            </p>
          </div>

          <div>
            <div className="h-[400px] lg:h-[800px] grid md:grid-cols-2 gap-4 mt-8 lg:mt-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,to_black_90%,transparent)]">
              <IntegrationColumns integrations={integrations} />
              <IntegrationColumns
                integrations={integrations.slice().reverse()}
                className="hidden md:flex"
                reverse={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
