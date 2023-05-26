import {Font, Input} from "./components/ui";
import {ThemeProvider} from "styled-components";
import {theme} from "./config";

function App() {

  return (
    <ThemeProvider theme={theme} >
        <Font/>
        <Input/>
    </ThemeProvider>
  )
}

export default App
