import { ReactNode } from "react"

interface Props {
    children: ReactNode;
    style: React.CSSProperties;
}
function PrimaryButton({ children, style }: Props) {
    return (
        <button style={style} aria-label="Decorative Button" className="rounded-[57px] px-[28px] py-[14px] text-[12px] sm:text-[16px]" > {children}</button >
    )
}

export default PrimaryButton
