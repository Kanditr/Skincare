import "./App.css";
import { AuthProvider } from "./auth";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./containers/homepage";
import Bugs from "./components/Bugs";
import configureStore from "./store/configureStore";
import { Provider } from "react-redux";
import BugsList from "./components/BugsList";

const store = configureStore();

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/1" component={Bugs} />
            <Route exact path="/2" component={BugsList} />
          </Switch>
        </Router>
      </Provider>
    </AuthProvider>
  );
}

export default App;
