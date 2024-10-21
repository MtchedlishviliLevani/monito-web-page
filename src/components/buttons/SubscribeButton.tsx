import { ReactNode } from "react";
interface Props {
    children: ReactNode;
    style: React.CSSProperties;
}
function SubscribeButton({ children, style }: Props) {
    return (
        <button style={style} aria-label="Subscribe Button" className="rounded-[8px] px-[28px] py-[14px] font-[500] bg-primaryColors-primaryDark text-neutralColors-0">{children}</button>
    )
}

export default SubscribeButton
