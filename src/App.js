import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import BigO from "./pages/BigO";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Header />
      <div id="content">
        <Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/big-o" component={BigO} />
          </Switch>
        </Container>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
