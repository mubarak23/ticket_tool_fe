import React from "react";
import { Link } from "react-router-dom";

const NavSide = () => {
  return (
    <div>
      <div className="sidebar">
        <Link className="active" to="/home">
          Create Ticket
        </Link>
        <Link to="/actions">ACTIONS</Link>
        <a href="status.html">STATUS</a>
        <a href="history.html">HISTORY</a>
      </div>
      <div className="navbar">
        <div className="container">
          <div className="user">
            <div className="user1" style={{ display: "inline-block" }}>
              <h6>WELCOME</h6>
            </div>
            <div
              className="user2"
              style={{ display: "inline-block" }}
              //style={{ text-transform: "uppercase" }}
              //style="display: inline-block; text-transform: uppercase;"
            >
              <h6 id="username"></h6>
            </div>
          </div>
          <button
            type="submit"
            className="btn signout"
            id="pos-signout"
            onclick="signOut()"
          >
            SIGN OUT
          </button>
        </div>
      </div>
      <div className="head_links">
        <div className="container">
          <div className="row">
            <div className="col-sm-3">
              <a href="posdashboard.html">
                <div className="head_link1 pos-container">
                  <div className="lhs3" style={{ display: "inline-block" }}>
                    <h6>POS</h6>
                  </div>
                  <div
                    className="rhs3"
                    style={{ display: "inline-block" }}
                  ></div>
                </div>
              </a>
            </div>
            <div className="col-sm-3">
              <a href="transferdashboard.html">
                <div className="head_link2">
                  <div className="lhs3" style={{ display: "inline-block" }}>
                    <h6>TRANSFER</h6>
                  </div>
                  <div
                    className="rhs3"
                    style={{ display: "inline-block" }}
                  ></div>
                </div>
              </a>
            </div>
            <div className="col-sm-3">
              <a href="posdashboard.html">
                <div className="head_link1 pos-container">
                  <div className="lhs3" style={{ display: "inline-block" }}>
                    <h6>wallet</h6>
                  </div>
                  <div
                    className="rhs3"
                    style={{ display: "inline-block" }}
                  ></div>
                </div>
              </a>
            </div>
            <div className="col-sm-3">
              <a href="othersdashboard.html">
                <div className="head_link3 pos-container">
                  <div className="lhs3" style={{ display: "inline-block" }}>
                    <h6>OTHERS</h6>
                  </div>
                  <div
                    className="rhs3"
                    style={{ display: "inline-block" }}
                  ></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavSide;
