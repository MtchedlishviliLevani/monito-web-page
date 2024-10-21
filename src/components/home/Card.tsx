import { ReactNode } from "react"
interface Props {
    children: ReactNode
}

function Card({ children }: Props) {
    return (
        <article className='card-container rounded-[18px] bg-white p-[8px]'>
            {children}
        </article>
    )
}

export default Card
