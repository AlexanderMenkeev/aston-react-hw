import { ThemeProvider } from '../shared/lib/theme/ThemeContext';
import { ModalProvider } from '../shared/lib/modal/ModalContext';
import router from './providers/router';
import { RouterProvider } from 'react-router-dom';
import { store } from './providers/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ModalProvider>
          <RouterProvider router={router} />;
        </ModalProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
