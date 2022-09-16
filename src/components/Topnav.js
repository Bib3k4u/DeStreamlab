import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,NavLink
} from "react-router-dom";

function Topnav() {
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
                <Link className="nav-link" to={"/delab"}>
                {" "}
                  <img src="Logo.png" alt="" />
                  <span className="sr-only">(current)</span>
                </Link>
                


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
              </div>
            </div>
            <button className="buttonclass">
              {/* <a href="#"> */}
              {/* <form class="buttonclass" class="form-inline my-2 my-lg-0"> */}
              <Link className="cwallet" to={"/connect"} style={{ color: "white" }}>
                {" "}
                Connect Wallet
              </Link>
            </button>
            {/* <span  class="material-symbols-outlined">
  account_balance_wallet
  </span> */}
            {/* </form> */}
            {/* </a> */}
          </div>
        </nav>
  </>
  );
}

export default Topnav;
