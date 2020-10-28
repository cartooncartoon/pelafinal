import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Messenger from "../src/components/messenger";

const App = () => {
  return (
    <Router>
      <Route path="/" exact component={Messenger} />
    </Router>
  );
}

export default App;
