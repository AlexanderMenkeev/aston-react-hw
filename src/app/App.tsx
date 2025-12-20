import { ThemeProvider } from '../shared/lib/theme/ThemeContext';
import router from './providers/router';
import { RouterProvider } from 'react-router-dom';
import { store } from './providers/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RouterProvider router={router} />;
      </ThemeProvider>
    </Provider>
  );
}

export default App;
