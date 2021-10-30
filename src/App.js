import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Signin from "./components/Signin";
import About from "./pages/About";
import CreateParcel from "./pages/CreateParcel";
import Coverage from "./pages/Coverage";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./pages/PrivateRoute";
import Terms from "./pages/Terms";
import Parcels from "./pages/Parcels";
import MyParcels from "./pages/MyParcels";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/coverage">
            <Coverage />
          </Route>
          <Route path="/terms">
            <Terms />
          </Route>
          <Route path="/myParcels">
            <MyParcels />
          </Route>
          <PrivateRoute path="/parcels">
            <Parcels />
          </PrivateRoute>
          <Route path="/signin">
            <Signin />
          </Route>
          <PrivateRoute path="/create-parcel">
            <CreateParcel />
          </PrivateRoute>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
