import { Header } from "./Header"
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";

export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      {/* Main Content Area */}
      <main className="layout-main">
        <div className="main-content-wrapper">
          <div className="content-body">
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
