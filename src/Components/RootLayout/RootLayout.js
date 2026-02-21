import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import QuickAccessBtn from "../QuickAccessBtn/QuickAccessBtn";


const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <QuickAccessBtn />
      <Footer />
    </>
  );
};
export default RootLayout;
