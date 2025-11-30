import Header from "../../widgets/LayoutHeader";
import Footer from "../../widgets/LayoutFooter";
import { useTheme } from "../lib/theme/ThemeContext";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const themeStyles = {
    backgroundColor: isDarkTheme ? "#333" : "#CCC",
  };

  return (
    <div>
      <Header />
      <button onClick={toggleTheme}> Toggle Theme </button>
      <main style={themeStyles}>{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
