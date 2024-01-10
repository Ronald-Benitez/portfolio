import { useTranslation } from 'react-i18next'

import Icons, { Props as IconsProps } from '../utils/icons'

function SkillsSection() {
  const { t } = useTranslation()

  const languages = ["TypeScript", "JavaScript"]

  const frameworks = [
    "NodeJS",
    "React",
    "NextJS",
    "Vite",
    "React Native",
  ]

  const tools = [
    "Expo",
    "Firebase",
    "Supabase",
    "Vercel",
    "Git",
    "Github",
    "Github Copilot"
  ]

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl text-center p-2 truncate">
        {t('skills')}
      </h1>
      <h2 className="text-2xl text-center mt-8 p-2 truncate text-pretty mb-5">
        {t('skills-section.languages')}
      </h2>
      <Icons icons={languages as IconsProps["icons"]} />
      <h2 className="text-2xl text-center mt-8 p-2 truncate text-pretty mb-5">
        {t('skills-section.frameworks')}
      </h2>
      <Icons icons={frameworks as IconsProps["icons"]} />
      <h2 className="text-2xl text-center mt-8 p-2 truncate text-pretty mb-5">
        {t('skills-section.tools')}
      </h2>
      <Icons icons={tools as IconsProps["icons"]} />

    </div>
  )
}

export default SkillsSection