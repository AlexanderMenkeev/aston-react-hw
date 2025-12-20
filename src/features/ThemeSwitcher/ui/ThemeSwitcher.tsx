import { useTheme } from '../../../shared/lib/theme/ThemeContext';
import Button from '../../../shared/ui/Button/Button';
import { Sun, Moon } from 'lucide-react';

function ThemeSwitcher() {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <Button variant="icon" onClick={toggleTheme}>
      {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
}

export default ThemeSwitcher;
