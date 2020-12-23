import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router-dom";
import {
    auth as authRoutes,
    page as dashboardRoutes } from './index'
import DashboardLayout from "../pages/layouts/Dashboard"
import AuthLayout from "../pages/layouts/Auth"
import Dashboard  from "../pages/layouts/Dashboard";
import Page404 from '../pages/error/Page404'
import ScrollToTop from "../components/ScrollToTop";


const MapRoute = (Layout, routes) =>
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

    
export default function Routes(){
    console.log(authRoutes)
    return(
        <Router>
            <ScrollToTop>
                <Switch>
                    <Route exact path="/" render={() => (<Redirect to="/auth/sign-in" />)} />

                    {MapRoute(AuthLayout,authRoutes)}
                    {
                        sessionStorage.getItem('Session') == null ? MapRoute() : <Redirect to="/auth/sign-in"/>
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

