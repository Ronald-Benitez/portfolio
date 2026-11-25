import { useTranslation } from "react-i18next"
import { IconClipboard, IconMapPin, IconPhone } from "@tabler/icons-react"

import MailtToClipBoard from "./mail-to-clipboard"

function ContactSection() {
    const { t } = useTranslation()

    return (
        <div className="flex justify-center items-center flex-col">
            <h1 className="text-4xl text-center p-2 truncate">
                {t("contact")}
            </h1>
            <div className="flex flex-row justify-center items-center gap-5 mt-4">
                <a href="mailto:ronald362001@gmail.com"
                    className="border-b border-black p-2 hover:bg-gray-200 "
                >
                    ronald362001@gmail.com
                </a>
                <MailtToClipBoard>
                    <IconClipboard size={25} />
                </MailtToClipBoard>
            </div>
            <div className="flex flex-row flex-wrap justify-center items-center gap-5 mt-2">
                <a
                    href="tel:+50364426442"
                    className="flex items-center gap-2 border-b border-black p-2 hover:bg-gray-200"
                >
                    <IconPhone size={20} />
                    +503 6442-6442
                </a>
                <p className="flex items-center gap-2 p-2">
                    <IconMapPin size={20} />
                    {t("main-section.location")}
                </p>
            </div>
        </div>
    )
}

export default ContactSection
