import { ReactNode } from "react"

interface Props {
    children: ReactNode
}
function SubmitButton({ children }: Props) {
    return (
        <button aria-label="Decorative Button" className="w-[100%] rounded-[4px] px-[28px] py-[14px] font-[500] bg-primaryColors-primaryDark text-white">{children}</button>

    )
}

export default SubmitButton
