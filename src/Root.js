import {Outlet} from "react-router-dom";
import TopNav from "./components/TopNav/TopNav";

const RootLayout = () => {
    return <>
        <TopNav/>
        <main>
            <Outlet/>
        </main>
    </>
}
export default RootLayout
