import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";


const MainLayouts = () => {
    return (
        <div>
            {/* navbar */}
            <div className="h-16">
              <NavBar></NavBar>
            </div>
            {/* Display dynamic components */}
           <div className="min-h-[calc(100vh-116px)]">
            <Outlet></Outlet>
           </div>
            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;