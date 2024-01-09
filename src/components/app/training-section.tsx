import { useTranslation } from 'react-i18next'

function TrainingSection() {
    const { t } = useTranslation()

    const training = [
        {
            "title": t('training-section.academic'),
            "description": t('training-section.academic-description'),
        },
        {
            "title": t('training-section.self-taught'),
            "description": t('training-section.self-taught-description'),
        },
        {
            "title": t('training-section.english'),
            "description": t('training-section.english-description'),
        }
    ]

    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl text-center p-2 truncate">
                {t('training')}
            </h1>
            {
                training.map((item, i) => (
                    <div className="flex flex-col justify-center items-center" key={i}>
                        <h2 className="text-2xl text-center mt-8 p-2 truncate text-pretty">
                            {item.title}
                        </h2>
                        <p className="text-center text-balance mt-4 max-w-prose p-2">
                            {item.description}
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default TrainingSection