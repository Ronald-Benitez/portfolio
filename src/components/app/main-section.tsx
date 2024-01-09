import { useTranslation } from "react-i18next"
import { IconBrandGithub, IconBrandLinkedin, IconMailForward, IconMail } from "@tabler/icons-react"
import toast,{Toaster} from "react-hot-toast"

const socialMedia = [
    { name: "github", href: "https://github.com/Ronald-Benitez", icon: <IconBrandGithub size={25} /> },
    { name: "linkedin", href: "https://www.linkedin.com/in/ronald-ben%C3%ADtez-9416051b9/", icon: <IconBrandLinkedin size={25} /> },
    { name: "email", href: "mailto:ronald362001@gmail.com", icon: <IconMailForward size={25} /> }
]

function MainSection() {
    const { t } = useTranslation()
    
    const mailtToClipBoard = () => {
        navigator.clipboard.writeText("ronald362001@gmail.com")
        toast.success(t("toast.email"))
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <img
                src="avatar.jpeg"
                alt="avatar"
                className="rounded-full size-32"
            />
            <h1 className="text-4xl text-center mt-4 p-2 truncate">
                {t("main-section.title")} <span className="font-bold">{t("main-section.name")} {t("main-section.lastname")}</span>
            </h1>
            <p className="text-center mt-4 max-w-prose p-2">
                {t("main-section.description")}
            </p>
            <div className="flex justify-center mt-4">
                {
                    socialMedia.map((item, i) => (
                        <a
                            key={i}
                            href={item.href}
                            className="hover:text-gray-600 p-2"
                            target="_blank"
                        >
                            {item.icon}
                        </a>
                    ))
                }
                <button
                    className="hover:text-gray-600 p-2"
                    onClick={mailtToClipBoard}
                >
                    <IconMail size={25} />
                </button>
            </div>

            <div className="flex justify-center mt-4">
                <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded text-sm">
                    {t('main-section.button')}
                </button>
            </div>
            <Toaster/>
        </div>
    )
}

export default MainSection