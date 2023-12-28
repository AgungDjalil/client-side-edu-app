import { ReactNode } from "react";
import { useAuthContext } from "../../context/AuthContext";

type Props = {
    children: ReactNode,
    pageType: string
}

export function PageShield({ children, pageType }: Props) {
    const { userRole, isReady } = useAuthContext()

    if(!isReady && !userRole) return <h1>loading.....</h1>

    if(isReady && userRole !== pageType) return <h1>page not found</h1>

    return (
        <>
            {children}
        </>
    )
}