
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const CommonLayout = async ({ children }) => {

  return (
    <div>
      <Navbar></Navbar>
      <main className="min-h-screen">{children}</main>
      <Footer></Footer>
    </div>
  );
};

export default CommonLayout;
