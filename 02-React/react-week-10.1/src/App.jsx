import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import {
  Home,
  Class11Program,
  Class12DroppersProgram,
  Class12Program,
  ErrorPage,
} from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route
              path="/neet/online-coaching-class-11"
              element={<Class11Program />}
            />
            <Route
              path="/neet/online-coaching-class-12"
              element={<Class12Program />}
            />
            <Route
              path="/neet/online-coaching-class-12-droppers"
              element={<Class12DroppersProgram />}
            />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

function Layout() {
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          boxShadow: "1px 2px 3px rgba(0 ,0 ,0 ,0.4)",
          padding: 20,
          textAlign: "center",
        }}
      >
        <Link to={"/"}>Allen</Link> |{" "}
        <Link to={"/neet/online-coaching-class-11"}>Class-11</Link> |{" "}
        <Link to={"/neet/online-coaching-class-12"}>Class-12</Link> |{" "}
        <Link to={"/neet/online-coaching-class-12-droppers"}>
          Class-12-Droppers
        </Link>
      </div>
      <div style={{ height: "80vh" }}>
        <Outlet />
      </div>
      <div style={{ margin: 20, height: "5vh" }}>Contact Us | 9803232344</div>
    </div>
  );
}

export default App;
