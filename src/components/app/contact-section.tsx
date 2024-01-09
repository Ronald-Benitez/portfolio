import { useTranslation } from "react-i18next"
import { IconClipboard } from "@tabler/icons-react"

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
        </div>
    )
}

export default ContactSection