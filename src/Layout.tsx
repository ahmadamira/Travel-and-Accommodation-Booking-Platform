import React, { ReactNode } from "react";
import Header from "./Pages/Components/Header/index";
import Footer from "./Pages/Components/Footer/index";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
