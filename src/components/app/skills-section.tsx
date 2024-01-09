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
  IconBrandGithubCopilot
} from "@tabler/icons-react"
import { useTranslation } from 'react-i18next'

import SkillsBlock from './skills-block'

function SkillsSection() {
  const { t } = useTranslation()

  const languages = [
    {
      "name": "TypeScript",
      "icon": <IconBrandTypescript size={28} />
    },
    {
      "name": "JavaScript",
      "icon": <IconBrandJavascript size={28} />
    }
  ]

  const frameworks = [
    {
      "name": "NodeJS",
      "icon": <IconBrandNodejs size={28} />
    },
    {
      "name": "React",
      "icon": <IconBrandReact size={28} />
    },
    {
      "name": "NextJS",
      "icon": <IconBrandNextjs size={28} />
    },
    {
      "name": "Vite",
      "icon": <IconBrandVite size={28} />
    },
    {
      "name": "React Native",
      "icon": <IconBrandReactNative size={28} />
    },
    {
      "name": "Expo",
      "icon": <img src="expo-logo.svg" alt="expo" className="size-7" />
    }
  ]

  const tools = [
    {
      "name": "Firebase",
      "icon": <IconBrandFirebase size={28} />
    },
    {
      "name": "Supabase",
      "icon": <IconBrandSupabase size={28} />
    },
    {
      "name": "Vercel",
      "icon": <IconBrandVercel size={28} />
    },
    {
      "name": "Git",
      "icon": <IconBrandGit size={28} />
    },
    {
      "name": "Github",
      "icon": <IconBrandGithub size={28} />
    },
    {
      "name": "Github Copilot",
      "icon": <IconBrandGithubCopilot size={28} />
    }
  ]

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl text-center p-2 truncate">
        {t('skills')}
      </h1>
      <SkillsBlock title={t('skills-section.languages')} skills={languages} />
      <SkillsBlock title={t('skills-section.frameworks')} skills={frameworks} />
      <SkillsBlock title={t('skills-section.tools')} skills={tools} />

    </div>
  )
}

export default SkillsSection