import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "./App.css";
import routes from "./config/routes";
import { FileSystem } from "./views/FileSystem";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={routes.FILE_SYSTEM_BASE_PATH} component={FileSystem} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
