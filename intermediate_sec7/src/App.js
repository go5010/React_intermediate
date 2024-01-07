import "./App.css";
import { UserProvider } from "./components/providers/UserProvider";
import { Router } from "./components/router/Router";

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
