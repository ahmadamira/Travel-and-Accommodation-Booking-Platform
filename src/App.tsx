import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Router from "./Router";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <SnackbarProvider>
      <Router />
    </SnackbarProvider>
  );
}

export default App;
