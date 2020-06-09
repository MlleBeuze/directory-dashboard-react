import React from "react";
import { Switch, Redirect } from "react-router-dom";

import { RouteWithLayout } from "./components";
import { Main as MainLayout, Minimal as MinimalLayout } from "./layouts";

import {
  Dashboard as DashboardView,
  Contacts as ContactsView,
  SingleContact as SingleContactView,
  NotFound as NotFoundView,
} from "./views";

const routes = [
  { path: "/dashboard", component: DashboardView },
  { path: "/contacts", component: ContactsView },
  { path: "/contacts/:id", component: SingleContactView },
  { path: "/organizations", component: DashboardView },
  { path: "/categories", component: DashboardView },
  { path: "/countries", component: DashboardView },
  { path: "/cities", component: DashboardView },
  { path: "/account", component: DashboardView },
  { path: "/settings", component: DashboardView },
  { path: "/not-found", component: NotFoundView, layout: MinimalLayout },
];

const Routes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      {routes.map((route, index) => (
        <RouteWithLayout
          key={index}
          component={route.component}
          exact
          layout={route.layout || MainLayout}
          path={route.path}
        />
      ))}
      {/* <Redirect to="/not-found" /> */}
    </Switch>
  );
};

export default Routes;
