import "./App.css";
import { AuthProvider } from "./auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./containers/homepage";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
