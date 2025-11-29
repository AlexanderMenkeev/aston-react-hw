import Header from "../../widgets/LayoutHeader";
import Footer from "../../widgets/LayoutFooter";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Header />
      <main style={{ padding: "20px" }}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
