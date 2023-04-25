import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import Root from "./assets/styles/Root.css";
import NavBar from "./components/shared/nav-bar/nav-bar.css";
import Home from "./components/home/home.css";

export function links() {
  return [
    { rel: "stylesheet", href: NavBar },
    { rel: "stylesheet", href: Home },
    { rel: "stylesheet", href: Root },
  ];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
