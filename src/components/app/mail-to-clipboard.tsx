import toast, { Toaster } from "react-hot-toast"
import { useTranslation } from "react-i18next"

interface Props {
    children: React.ReactNode
}

function MailtToClipBoard({ children }: Props) {
    const { t } = useTranslation()

    const mailtToClipBoard = () => {
        navigator.clipboard.writeText("ronald362001@gmail.com")
        toast.success(t("toast.email"))
    }

    return (
        <>
            <button
                className="hover:text-gray-600 p-2"
                onClick={mailtToClipBoard}
            >
                {children}
            </button>
            <Toaster />
        </>
    )
}

export default MailtToClipBoard