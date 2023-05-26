import { DefaultStyles, Input } from './components/ui';
import { ThemeProvider } from 'styled-components';
import { theme } from './config';
import { Container } from './components/ui/Container.tsx';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <DefaultStyles />
        <Input />
      </Container>
    </ThemeProvider>
  );
}

export default App;
