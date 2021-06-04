import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Recursion from "./pages/Recursion";

const App = () => {
  return (
    <Router>
      <Header />
      <div id="content">
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/recursion" component={Recursion} />
          </Switch>
        </Container>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
