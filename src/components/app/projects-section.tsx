import {
    IconBrandGithub,
    IconDownload,
    IconExternalLink
} from '@tabler/icons-react'
import { useTranslation } from "react-i18next"

import Icons, { Props as IconsProps } from '../utils/icons'

type Source = {
    href: string
    text: string
}

function ProjectsSection() {
    const { t } = useTranslation()

    const projects = [
        {
            name: t("pockettool.title"),
            description: t("pockettool.description"),
            image: "pockettool-logo.png",
            technologies: [
                "React Native",
                "Expo",
                "JavaScript",
                "SQLite",
                "Zustand",
                "TypeScript"
            ],
            url: "https://play.google.com/store/apps/details?id=com.empanada.PoketTool",
            btnIcon: <IconDownload size={25} />,
            source: [
                {
                    href: "https://github.com/Ronald-Benitez/PocketTool",
                    text: "GitHub"
                }
            ]
        },
        {
            name: t("conadem.title"),
            description: t("conadem.description"),
            technologies: [
                "Vue3",
                "TailwindCSS"
            ],
            url: "https://conadem.gob.sv/es",
            btnIcon: <IconExternalLink size={25} />,
            source: []
        },
        {
            name: t("innovatech.title"),
            description: t("innovatech.description"),
            technologies: [
                "Vue3",
                "TailwindCSS"
            ],
            url: "https://innova.innovacion.gob.sv/",
            btnIcon: <IconExternalLink size={25} />,
            source: []
        }
    ];

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
                        {
                            item.image && (
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-40 h-40 rounded-full"
                                />
                            )
                        }
                        <h2 className="text-2xl text-center mt-4 p-2 truncate">
                            {item.name}
                        </h2>
                        <p className="text-center mt-4 max-w-prose p-2 lg:px-10">
                            {item.description}
                        </p>
                        <h3 className="text-center mt-4 max-w-prose p-2 font-bold mb-4">
                            {t("projects-section.technologies")}
                        </h3>
                        <Icons icons={item.technologies as IconsProps["icons"]} style='flex justify-center flex-wrap gap-8 max-w-[400px]'/>
                        <h3 className="text-center mt-4 max-w-prose p-2 font-bold">
                            {t("projects-section.links")}
                        </h3>
                        <div className="flex justify-center mt-4">
                            <div className='flex flex-col'>
                                <a
                                    href={item.url}
                                    className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded text-sm mx-2 "
                                    target="_blank"
                                >
                                    {item.btnIcon}
                                </a>
                                <p></p>
                            </div>
                            {
                                item.source.map((source: Source, i: number) => (
                                    <div className='flex flex-col' key={i}>
                                        <a
                                            href={source.href}
                                            className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded text-sm mx-2"
                                            target="_blank"
                                        >
                                            <IconBrandGithub size={25} />
                                        </a>
                                        {/* <p className="text-xs text-center">{source.text}</p> */}
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                ))
            }

        </div >
    )
}

export default ProjectsSection