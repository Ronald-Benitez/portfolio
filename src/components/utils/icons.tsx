import {
    IconBrandTypescript,
    IconBrandJavascript,
    IconBrandNextjs,
    IconBrandVite,
    IconBrandReact,
    IconBrandReactNative,
    IconBrandNodejs,
    IconBrandFirebase,
    IconBrandSupabase,
    IconBrandVercel,
    IconBrandGit,
    IconBrandGithub,
    IconBrandGithubCopilot,
    IconBrandRedux,
    IconBrandTailwind
} from "@tabler/icons-react"


export interface Props {
    icons: (keyof typeof options)[],
    style?: string
}

const options = {
    "TypeScript": {
        "name": "TypeScript",
        "icon": <IconBrandTypescript size={28} />
    },
    "JavaScript": {
        "name": "JavaScript",
        "icon": <IconBrandJavascript size={28} />
    },
    "NodeJS": {
        "name": "NodeJS",
        "icon": <IconBrandNodejs size={28} />
    },
    "React": {
        "name": "React",
        "icon": <IconBrandReact size={28} />
    },
    "NextJS": {
        "name": "NextJS",
        "icon": <IconBrandNextjs size={28} />
    },
    "Vite": {
        "name": "Vite",
        "icon": <IconBrandVite size={28} />
    },
    "React Native": {
        "name": "React Native",
        "icon": <IconBrandReactNative size={28} />
    },
    "Expo": {
        "name": "Expo",
        "icon": <img src="expo-logo.svg" alt="expo" className="size-7" />
    },
    "Firebase": {
        "name": "Firebase",
        "icon": <IconBrandFirebase size={28} />
    },
    "Supabase": {
        "name": "Supabase",
        "icon": <IconBrandSupabase size={28} />
    },
    "Vercel": {
        "name": "Vercel",
        "icon": <IconBrandVercel size={28} />
    },
    "Git": {
        "name": "Git",
        "icon": <IconBrandGit size={28} />
    },
    "Github": {
        "name": "Github",
        "icon": <IconBrandGithub size={28} />
    },
    "Github Copilot": {
        "name": "Github Copilot",
        "icon": <IconBrandGithubCopilot size={28} />
    },
    "PostgreSQL": {
        "name": "PostgreSQL",
        "icon": <img src="postgresql-logo.svg" alt="postgresql" className="size-7" />
    },
    "SQLite": {
        "name": "SQLite",
        "icon": <img src="sqlite-logo.svg" alt="sqlite" className="size-7" />
    },
    "Redux Toolkit": {
        "name": "Redux Toolkit",
        "icon": <IconBrandRedux size={28} />
    },
    "TailwindCSS": {
        "name": "TailwindCSS",
        "icon": <IconBrandTailwind size={28} />
    },
}


function Icons({ icons, style }: Props) {

    return (
        <>
            <div className={style ? style : 'grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4'}>
                {
                    icons.map((item, i) => (
                        <div className="flex flex-col justify-center items-center" key={i}>
                            {options[item].icon}
                            <p className="text-center text-balance mt-4 max-w-prose p-2">
                                {options[item].name}
                            </p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Icons