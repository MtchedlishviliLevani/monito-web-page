import { ReactNode, useContext } from "react"
import { globalContext } from "../../context"
import { Navigate } from "react-router"

function Authenticated({ children }: { children: ReactNode }) {
    const { isAuthenticated } = useContext(globalContext)
    return isAuthenticated ? children : <Navigate to={"/"} />


}

export default Authenticated
