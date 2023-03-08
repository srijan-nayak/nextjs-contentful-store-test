import { ReactNode } from "react";
import NavBar from "@/components/nav-bar";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
