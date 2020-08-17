import React, { Suspense } from "react";
import "../../index.css";
import { routes } from "../../routes";
import { Switch, Route, Redirect } from "react-router-dom";
import { routePath } from "../../constants/appRoutes";
import { useSelector } from "react-redux";


const Header = React.lazy(() => import("./Header"));

const loading = () => (
    <div className="animated fadeIn pt-3 text-center">loading...</div>
);

const DefaultLayout = () => {
    const { Login } = useSelector(state => state);
    const isLogin = localStorage.getItem("token") ? true : false;
    return (
        <div className="app">
            <Suspense fallback={loading()}>
                <Header />
            </Suspense>
            <div className="appbody">
                <Suspense fallback={loading()}>
                    {isLogin ? (
                        <Switch>
                            {routes.map((item, index) => {
                                return (
                                    <Route
                                        key={index}
                                        path={item.path}
                                        render={(props) => <item.component {...props} />}
                                        exact={item.exact}
                                    />
                                )
                            })}
                            <Redirect from="/" to={routePath.EVENT_LIST} />
                        </Switch>
                    ) : (
                            <Redirect from="/" to={routePath.LOGIN} />
                        )}
                </Suspense>

            </div>
        </div >
    )
}

export default DefaultLayout;