import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar.jsx";
const MainLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <Navbar />
                <main>{children}</main>
            </body>
        </html>
    );
};

export default MainLayout;
