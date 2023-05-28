import { DefaultStyles } from './components/ui';
import { ThemeProvider } from 'styled-components';
import { theme } from './config';
import { Container } from './components/Container.tsx';
import { MultiForm } from './components/MultiForm.tsx';
import { Provider } from './provider';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <DefaultStyles />
        <MultiForm />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
