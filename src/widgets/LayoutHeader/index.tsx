import ThemeSwitcher from "../../features/ThemeSwitcher/ui/ThemeSwitcher";
import { useTheme } from "../../shared/lib/theme/ThemeContext";
import Button from "../../shared/ui/Button";

interface HeaderProps {
  onOpenModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const { isDarkTheme } = useTheme();

  return (
    <header
      className={
        "sticky top-0 z-50 w-full backdrop-blur-sm border-b shadow-md " +
        (isDarkTheme
          ? "bg-slate-900/90 border-slate-700"
          : "bg-white/90 border-slate-200")
      }
    >
      <div className="mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-16 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            Logo
          </div>
          <span
            className={
              "text-xl font-bold " +
              (isDarkTheme ? "text-white" : "text-slate-900")
            }
          >
            Проект
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="secondary" size="sm" onClick={onOpenModal}>
            О проекте
          </Button>

          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
