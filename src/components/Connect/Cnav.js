import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,NavLink
} from "react-router-dom";


function Cnav() {
  return (
    <>
    <nav className="navbar  navbar-expand-lg navbar-dark bg-dark">
          {/* <a class="navbar-brand" href="#">Navbar</a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  <img src="Logo.png" alt="" />
                  {/* <h3 style={{ marginLeft: 20, marginTop: -8 }}>
                    De Streamlabs
                  </h3>{" "} */}
                  <span className="sr-only">(current)</span>
                </a>
              </li>
            </ul>
            <div id="searchbox1" className="input-group mb-4">
              <input
                id="input1"
                type="search"
                placeholder="Search here..."
                aria-describedby="button-addon5"
                className="form-control"
              />
              <div className="input-group-append">
                <button id="button-addon5" type="submit" className="btn">
                  {" "}
                  <i className="fa fa-search"> </i>{" "}
                </button>
                <div className="group">
                <Link to={"/following"}>
                {" "}
                Following
              </Link>
              <Link to={"/browse"}>
                {" "}
                Browse
              </Link>
                </div>
              </div>
            </div>

            <div class="fullWidth header">
  <div class="container">
    <div class="col-xs-12 col-sm-10 col-md-8 col-lg-6 header-nav">
      <ul>
        <li>
          <a href="#" id='nav-id' class="header-nav-link header-nav-top-link">Profile</a>
          <ul>
            <li><a href="#" class="header-nav-link header-nav-sub-link">L1</a></li>
            <li><a href="#" class="header-nav-link header-nav-sub-link">L2</a></li>
            <li><a href="#" class="header-nav-link header-nav-sub-link">L3</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>
          </div>
        </nav>
    </>
    
  )
}

export default Cnav