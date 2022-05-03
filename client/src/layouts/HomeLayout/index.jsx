import { Outlet, useLocation } from "react-router-dom";
import BreadCrumb from "../../components/common/BreadCrumb";
import Container from "../../components/common/Container";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";
import Header from "../../components/home/Header/Header";

const HomeLayout = () => {
  const location = useLocation();
  return (
    <>
      <Navbar />
      {location.pathname === "/" && <Header />}
      <Container>
        {location.pathname !== "/" && <BreadCrumb />}
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};

export default HomeLayout;
