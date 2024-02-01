import {
    IconBrandGithub,
    IconDownload,
    IconBrandYoutube
} from '@tabler/icons-react'
import { useTranslation } from "react-i18next"

import Icons, { Props as IconsProps } from '../utils/icons'

function ProjectsSection() {
    const { t } = useTranslation()

    const projects = [
        {
            name: t("eco.title"),
            description: t("eco.description"),
            image: "eco-logo.png",
            technologies: [
                "React Native",
                "Expo",
                "JavaScript",
                "SQLite",
                "Redux Toolkit"
            ],
            url: "https://play.google.com/store/apps/details?id=com.empanada.All",
            btnIcon: <IconDownload size={25} />,
            source: "https://github.com/Ronald-Benitez/All.git"
        },
        {
            name: t("sh.title"),
            description: t("sh.description"),
            image: "sh-logo.ico",
            technologies: [
                "React",
                "TypeScript",
                "NextJS",
                "Supabase"
            ],
            url: "https://youtu.be/229d9n0L3vw",
            btnIcon: <IconBrandYoutube size={25} />,
            source: "https://github.com/Ronald-Benitez/sh"
        }
    ]

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl text-center mt-4 p-2 truncate">
                {t("projects")}
            </h1>
            {
                projects.map((item, i) => (
                    <div
                        key={i}
                        className="flex flex-col justify-center items-center mt-4 py-4 shadow-md rounded-md"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="rounded-full size-32"
                        />
                        <h2 className="text-2xl text-center mt-4 p-2 truncate">
                            {item.name}
                        </h2>
                        <p className="text-center mt-4 max-w-prose p-2">
                            {item.description}
                        </p>
                        <h3 className="text-center mt-4 max-w-prose p-2 font-bold">
                            {t("projects-section.technologies")}
                        </h3>
                        <Icons icons={item.technologies as IconsProps["icons"]} />
                        <h3 className="text-center mt-4 max-w-prose p-2 font-bold">
                            {t("projects-section.links")}
                        </h3>
                        <div className="flex justify-center mt-4">
                            <a
                                href={item.url}
                                className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded text-sm mx-2"
                                target="_blank"
                            >
                                {item.btnIcon}
                            </a>
                            <a
                                href={item.source}
                                className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded text-sm mx-2"
                                target="_blank"
                            >
                                <IconBrandGithub size={25} />
                            </a>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default ProjectsSection