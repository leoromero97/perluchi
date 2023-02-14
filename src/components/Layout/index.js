import Navbar from '../Navbar';

function Layout({ children }) {
  return (
    <main className="flex flex-col items-center w-full h-auto min-h-screen" >
      <Navbar />
      {children}
    </main>
  );
}

export default Layout;
