import Navbar from "./navbar";
import { useRouter } from "next/router";
// import Footer from "./footer";

export default function Layout({children}){
    let router = useRouter()
    let hideBar = router.pathname

    return(
        <>
            {hideBar === '/login'? null:hideBar === '/signup'? null:<Navbar/>}
            <main>{children}</main>
            {/* <Footer/> */}
        </>
    )
}
