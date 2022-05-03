import { Outlet, useLocation } from "react-router-dom";
import BreadCrumb from "../../components/common/BreadCrumb";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";

const HomeLayout = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      {location.pathname !== "/" && <BreadCrumb />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default HomeLayout;
