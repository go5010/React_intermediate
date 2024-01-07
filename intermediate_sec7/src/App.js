import { RecoilRoot } from "recoil";
import "./App.css";
import { UserProvider } from "./components/providers/UserProvider";
import { Router } from "./components/router/Router";

function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}

export default App;
