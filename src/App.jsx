import { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Outlet } from "react-router";

function App() {
  <>
    <NavBar />
    <Outlet />
  </>;
}

export default App;
