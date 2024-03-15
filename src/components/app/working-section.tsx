import { useTranslation } from 'react-i18next'
import { IconBrandGithub } from "@tabler/icons-react"
import Icons, { Props as IconsProps } from '../utils/icons'

function WorkingSection() {
    const { t } = useTranslation()

    const working = [
        // {
        //     name: t("family-business.title"),
        //     description: t("family-business.description"),
        //     source: "https://github.com/Ronald-Benitez/inventory",
        //     technologies: ["NextJS", "TypeScript", "Vercel", "PostgreSQL", "TailwindCSS"] as IconsProps["icons"]
        // },
        {
            name: t("restaurant.title"),
            description: t("restaurant.description"),
            source: "",
            technologies: ["Vite", "JavaScript", "Firebase", "React"] as IconsProps["icons"]
        }
    ]

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl text-center mt-4 p-2 truncate">
                {t("working-section.title")}
            </h1>
            <p className="text-center mt-4 max-w-prose p-2">
                {t("working-section.description")}
            </p>
            {
                working.map((item, i) => (
                    <div
                        key={i}
                        className="flex flex-col justify-center items-center mt-4 p-2 rounded-md shadow-md"
                    >
                        <h2 className="text-2xl text-center mt-4 p-2 truncate">
                            {item.name}
                        </h2>
                        <p className="text-center mt-4 max-w-prose p-2">
                            {item.description}
                        </p>
                        <h3 className="text-center mt-4 max-w-prose p-2 font-bold">
                            {t("working-section.technologies")}
                        </h3>
                        <Icons icons={item.technologies} />
                        {item.source && (
                            <div className="flex justify-center mt-4 gap-2">
                                <a
                                    className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded text-sm"
                                    href={item.source}
                                    target="_blank"
                                >
                                    <IconBrandGithub size={25} />
                                </a>
                            </div>
                        )}
                    </div>
                ))
            }

        </div>
    )
}

export default WorkingSection