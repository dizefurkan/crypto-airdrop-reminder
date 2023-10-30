import IndexPage from "./pages/index";
import { AppContext, useApp } from "./hooks";

function App() {
  const app = useApp();

  return (
    <AppContext.Provider value={app}>
      <section className="page">
        <IndexPage />
      </section>
    </AppContext.Provider>
  );
}

export default App;
