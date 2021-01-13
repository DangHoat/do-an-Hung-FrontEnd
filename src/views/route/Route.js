import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import {
    auth as authRoutes,
    page as dashboardRoutes } from './configRoute'
import DashboardLayout from "../pages/layouts/Dashboard"
import AuthLayout from "../pages/layouts/Auth"
import Dashboard  from "../pages/layouts/Dashboard";
import Page404 from '../pages/error/Page404'
import ScrollToTop from "../components/ScrollToTop";
import{getUser} from "../../../define/SharePreference"


const MapLayout1 = (Layout, routes) =>
    routes.map(({ children, path, component: Component }, index) =>
        
        children ? (
            // Route item with children
            children.map(({ path, component: Component }, index) => (

                <Route
                    key={index}
                    path={path}
                    exact
                    render={props => (
                        <Layout>
                            <Component {...props} />
                        </Layout>
                    )}
                />
            ))
        ) : (
                // Route item without children
                <Route
                    key={index}
                    path={path}
                    exact
                    render={props => (
                        <Layout>
                            <Component {...props} />
                        </Layout>
                    )}
                />
            )
     );
const MapLayout2 = (Layout, routes, isSidebar) =>
    routes.map(({ children, path, component: Component }, index) =>
        children ? (
            // Route item with children
            children.map(({ path, component: Component }, index) => (
                <Route
                    key={index}
                    path={path}
                    exact
                    render={props => (
                        <Layout isSidebar={isSidebar}>
                            <Component {...props} />
                        </Layout>
                    )}
                />
            ))
        ) : (
                // Route item without children
                <Route
                    key={index}
                    path={path}
                    exact
                    render={props => (
                        <Layout isSidebar={isSidebar}>
                            <Component {...props} />
                        </Layout>
                    )}
                />
            )
    );
    
export default function Routes(){
    return(
        <Router>
            <ScrollToTop>
                <Switch>
                    <Route exact path="/" render={() => (<Redirect to="/do-an/timeline" />)} />

                    {MapLayout1(AuthLayout,authRoutes)}
                    {
                       getUser() !== null ?
                    MapLayout2(Dashboard,dashboardRoutes,true) : <Redirect to="/auth/sign-in" />
                    }
                    <Route
                        render= {
                            ()=>(
                                <AuthLayout>
                                    <Page404/>
                                </AuthLayout>
                            )
                        }
                    />
                   
                </Switch>
            </ScrollToTop>
        </Router>
    )
}

