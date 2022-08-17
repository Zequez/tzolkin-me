import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  matchPath,
  useMatch,
} from "react-router-dom";
import TimeNow from "./routes/time-now";
import PeopleBoard from "./routes/people-board";
import Auth from "./routes/auth";
import cx from "classnames";

interface AppProps {}

const App: React.FC<AppProps> = () => (
  <BrowserRouter>
    <div className="flex flex-col h-screen">
      <main className="flex-grow w-full h-full overflow-auto bg-red-400">
        <Routes>
          <Route path="/" element={<TimeNow />} />
          <Route path="people" element={<PeopleBoard />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </main>
      <nav className="h-12 flex items-stretch justify-center bg-green-400 text-white uppercase text-sm font-semibold">
        <NavItem to="/">Sincronario</NavItem>
        <NavItem to="/people">Personas</NavItem>
      </nav>
    </div>
  </BrowserRouter>
);

const NavItem: React.FC<{
  to: string;
  children: React.ReactNode;
}> = ({ to, children }) => {
  const active = !!useMatch(to);

  // const active = !!matchPath(window.location.pathname, to);

  return (
    <Link
      to={to}
      className={cx(
        "hover:bg-green-500 px-4 flex items-center justify-center",
        {
          "bg-green-500": active,
        }
      )}
    >
      {children}
    </Link>
  );
};

export default App;
