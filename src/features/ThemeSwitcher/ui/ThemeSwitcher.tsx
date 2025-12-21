import { useAppDispatch, useAppSelector } from '../../../app/providers/hooks';
import { selectIsDarkTheme, toggleTheme } from '../../../shared/lib/theme/themeSlice';
import Button from '../../../shared/ui/Button/Button';
import { Sun, Moon } from 'lucide-react';

function ThemeSwitcher() {
  const dispatch = useAppDispatch();
  const isDarkTheme = useAppSelector(selectIsDarkTheme);

  return (
    <Button variant="icon" onClick={() => dispatch(toggleTheme())}>
      {isDarkTheme ? <Sun size={20} /> : <Moon size={20} />}
    </Button>
  );
}

export default ThemeSwitcher;
