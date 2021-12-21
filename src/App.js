import React, { Suspense } from "react";
import { Loading } from "./modules/views/loading/loading";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";

import routes from "./modules/routes";

import AdminRoute from "./modules/components/routeComponent/AdminRoute";

class App extends React.Component {
  render() {
    return (
      <>
        <Suspense fallback={<Loading />}>
          <Router>
            <Switch>
              {routes.map((route) => (
                <AdminRoute
                  title={route.title}
                  layout={route.layout}
                  component={route.component}
                  path={route.path}
                  exact={route.exact || true}
                />
              ))}
            </Switch>
          </Router>
        </Suspense>{" "}
      </>
    );
  }
}

export default App;
