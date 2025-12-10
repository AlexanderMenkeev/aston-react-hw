import { ThemeProvider } from '../shared/lib/theme/ThemeContext';
import { ModalProvider } from '../shared/lib/modal/ModalContext';
import router from './providers/router/router';
import { RouterProvider } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <ModalProvider>
        <RouterProvider router={router} />;
      </ModalProvider>
    </ThemeProvider>
  );
};

export default App;
