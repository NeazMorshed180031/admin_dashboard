import {lazy,Suspense} from 'react';
// import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import List from "./pages/list/List";
// import Single from "./pages/single/Single";
// import New from "./pages/new/New";




import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
const Home=lazy(()=>import("./pages/home/Home")) ;
const Login=lazy(()=>import("./pages/login/Login")) ;
const List=lazy(()=>import("./pages/list/List")) ;
const Single=lazy(()=>import("./pages/single/Single")) ;
const New=lazy(()=>import("./pages/new/New")) ;


function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <Suspense
    fallback={
      <div className="loading">
      Loading...
      </div>
    }
  >
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </Suspense>
  );
}

export default App;
