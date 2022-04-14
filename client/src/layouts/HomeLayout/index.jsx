import { Outlet } from "react-router-dom";
import Footer from "../../components/common/Footer";
import Navbar from "../../components/common/Navbar";

const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default HomeLayout;
