import "./App.css";
import { Route, Switch } from "react-router-dom";
import AddPost from "./AddPost/AddPost";
import Navbar from "./AddPost/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={AddPost} />
        {/* <Route exact path="/posts" component={asynchandler} /> */}
        {/* <Route exact path="/contactus" component={Contactus} /> */}
      </Switch>
    </>
  );
}

export default App;
