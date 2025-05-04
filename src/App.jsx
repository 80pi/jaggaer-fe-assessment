import { AppContainer } from "./pages/AppContainer";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <DataProvider>
      <AppContainer />
    </DataProvider>
  );
}

export default App;
