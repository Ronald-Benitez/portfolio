import {
    IconBrandGithub,
    IconBrandReactNative,
    IconDownload
} from '@tabler/icons-react'
import { useTranslation } from "react-i18next"

function ProjectsSection() {
    const { t } = useTranslation()

    const projects = [
        {
            name: t("eco.title"),
            description: t("eco.description"),
            image: "eco-logo.png",
            technologies: [
                <IconBrandReactNative size={28} />,
                <img src="expo-logo.svg" alt="expo" className="size-7" />
            ],
            url: "https://play.google.com/store/apps/details?id=com.empanada.All",
            source: "https://github.com/Ronald-Benitez/All.git"
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
                        className="flex flex-col justify-center items-center mt-4"
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
                        <div className="flex justify-center mt-4 gap-2">
                            {
                                item.technologies.map((technology, index) => (
                                    <div key={index}>
                                        {technology}
                                    </div>
                                ))
                            }
                        </div>

                        <h3 className="text-center mt-4 max-w-prose p-2 font-bold">
                            {t("projects-section.links")}
                        </h3>
                        <div className="flex justify-center mt-4">
                            <a
                                href={item.url}
                                className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded text-sm mx-2"
                                target="_blank"
                            >
                                <IconDownload size={25} />
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