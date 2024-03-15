import { useTranslation } from 'react-i18next'

import Icons, { Props as IconsProps } from '../utils/icons'

function SkillsSection() {
  const { t } = useTranslation()

  const languages = ["TypeScript", "JavaScript"]

  const frameworks = [
    "React",
    "React Native",
    "NextJS",
  ]

  const tools = [
    "NodeJS",
    "Vite",
    "Expo",
    "Firebase",
    "Supabase",
    "Vercel",
    "Git",
    "Github",
    "Redux Toolkit",
    "TailwindCSS"
  ]

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl text-center p-2 truncate">
        {t('skills')}
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20'>
        <div className='max-w-[500px]'>
          <h2 className="text-2xl text-center mt-8 p-2 truncate text-pretty mb-5">
            {t('skills-section.languages')}
          </h2>
          <Icons icons={languages as IconsProps["icons"]} style='grid grid-cols-2 gap-2' />
        </div>
        <div className='max-w-[500px]'>
          <h2 className="text-2xl text-center mt-8 p-2 truncate text-pretty mb-5">
            {t('skills-section.frameworks')}
          </h2>
          <Icons icons={frameworks as IconsProps["icons"]} style='grid grid-cols-2 gap-2' />
        </div>
      </div>
      <div className='max-w-[500px]'>
        <h2 className="text-2xl text-center mt-8 p-2 truncate text-pretty mb-5">
          {t('skills-section.tools')}
        </h2>
        <Icons icons={tools as IconsProps["icons"]} />
      </div>

    </div>
  )
}

export default SkillsSection