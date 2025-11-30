import Header from "../../widgets/LayoutHeader";
import Footer from "../../widgets/LayoutFooter";
import { useTheme } from "../lib/theme/ThemeContext";

interface MainLayoutProps {
  children: React.ReactNode;
  onOpenModal: () => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, onOpenModal }) => {
  const { isDarkTheme } = useTheme();
  return (
    <div
      className={
        "min-h-screen flex flex-col transition-colors duration-300 font-sans " +
        (isDarkTheme
          ? "bg-slate-900 text-slate-100"
          : "bg-slate-50  text-slate-900")
      }
    >
      <Header onOpenModal={onOpenModal} />
      <main className="flex-grow w-full mx-auto px-4">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
