import { clsx } from "clsx";
import Navbar from "../Navbar";
import Footer from '../Footer/index';

function Layout({ className, children }) {
  return (
    <main
      className={clsx(
        "flex flex-col items-center justify-between w-full h-auto min-h-screen bg-yellow-gray-default",
        className
      )}
    >
      <Navbar />
      {children}
      <Footer  />
    </main>
  );
}

export default Layout;
