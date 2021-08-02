import { ReactNode } from "react";
import MainHeader from "./main-header";

interface MainHeaderProps {
    children: ReactNode;
}
function Layout({ children }: MainHeaderProps) {
    return (
        <>
            <MainHeader />
            <main>{children}</main>
        </>
    )
}

export default Layout;