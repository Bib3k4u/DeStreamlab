import React from "react";
import { Link } from "react-router-dom";
import Sidenav from "../Sidenav";
import Cnav from "./Cnav";

function Browse() {
  return (
    <>
      <Cnav />
      <Sidenav />

      <a href="/browse">
        <h1>This is browse page</h1>
      </a>
    </>
  );
}

export default Browse;
