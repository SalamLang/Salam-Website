import routes from "./routes";

export const getRoute = (name, params) => {
  const route = routes[name];
  if (typeof route === "function") {
    return route(params);
  }
  return route;
};
