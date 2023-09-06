import React from "react";
import { last } from "ramda";

export const renderProviders = (Comp, providers) => {
  if (providers.length) {
    const NextProvider = last(providers);

    return renderProviders(
      <NextProvider>{Comp}</NextProvider>,
      providers.slice(0, -1)
    );
  }

  return Comp;
};
export const createRouteComponent = (Comp, providers) => {
  return (props) => {
    let toRender = <Comp {...props} />;

    return renderProviders(toRender, providers);
  };
};
export const renderRoutes = (routes, Nav, allRoutes) => {
  return routes.map((route) => {
    let Comp = route.component;

    if (route.providers) {
      Comp = createRouteComponent(Comp, route.providers, allRoutes);
    }

    return (
      <Nav.Screen
        key={route.name}
        name={route.name}
        options={route.options}
        getId={route.getId}
      >
        {(props) => <Comp {...props} routes={allRoutes} />}
      </Nav.Screen>
    );
  });
};
