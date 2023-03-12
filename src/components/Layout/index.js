import { useEffect, useState } from "react";
import clsx from "clsx";
import Footer from "../Footer/index";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";
import useMobileDetect from "../../hooks/useMobileDetect.js";

function Layout({ className, children }) {
  const isMobile = useMobileDetect();
  const [openSidebar, setOpenSidebar] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setOpenSidebar(false);
    } else {
      setOpenSidebar(true);
    }
  }, [isMobile]);

  const handleOpenSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <main
      className={clsx(
        "flex flex-col items-center justify-between w-full h-auto min-h-screen bg-yellow-gray-default",
        className
      )}
    >
      <Navbar onClick={handleOpenSidebar} opened={openSidebar} />
      {isMobile && (
        <Sidebar
          className={clsx(
            "flex flex-0 md:w-67 duration-900",
            !openSidebar && "duration-900 -translate-x-full hidden delay-300",
            openSidebar && "z-30 w-4/5 flex duration-500 fixed"
          )}
        />
      )}
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
