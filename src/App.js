import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routePath } from "./constants/appRoutes";

const Login = React.lazy(() => import("./Views/Auth/Login"));
const Signup = React.lazy(() => import("./Views/Auth/Signup"));
const DefaultLayout = React.lazy(() => import("./container/defualtLayout/DefaultLayout"));

const loading = () => (
  <div className="animated fadeIn pt-3 text-center">loading...</div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={loading()}>
        <Switch>
          <Route
            exact={true}
            path={routePath.LOGIN}
            render={(props) => <Login {...props} />} />
          <Route
            exact={true}
            path={routePath.SIGNUP}
            render={(props) => <Signup {...props} />} />
          <Route
            path="/"
            render={(props) => <DefaultLayout {...props} />} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}
export default App;
