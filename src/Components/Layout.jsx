import Header from "./Header";
import "./Layout.css";
import Footer from "./Footer";
import { Outlet } from "react-router";

function Layout() {
    return (
        <div className="layout">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}

export default Layout;
