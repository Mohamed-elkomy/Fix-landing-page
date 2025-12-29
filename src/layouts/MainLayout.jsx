import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header/Header";
import Footer from "../components/ui/Footer/Footer";

export default function MainLayout() {
    return (
        <>
            <Header />
            <main id="main-content">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

