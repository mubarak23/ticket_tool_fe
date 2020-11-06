import React from "react";

const NavSide = () => {
  return (
    <div>
      <div className="sidebar">
        <a className="active" href="posdashboard.html">
          ISSUE TYPE
        </a>
        <a href="actions.html">ACTIONS</a>
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
                  <div className="rhs3" style={{ display: "inline-block" }}>
                    <img
                      alt="pos"
                      src={process.env.PUBLIC_URL + "/img/9.jpg"}
                      //src="../../public/img/9.jpg"
                      className="img-fluid pos-image"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-3">
              <a href="transferdashboard.html">
                <div className="head_link2">
                  <div className="lhs3" style={{ display: "inline-block" }}>
                    <h6>TRANSFER</h6>
                  </div>
                  <div className="rhs3" style={{ display: "inline-block" }}>
                    <img
                      alt="transfer"
                      src={process.env.PUBLIC_URL + "/img/10.jpg"}
                      //src="assets/img/10.jpg"
                      className="img-fluid pos-image1"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-3">
              <a href="walletsdashboard.html">
                <div className="head_link4 pos-container">
                  <div className="lhs3" style={{ display: "inline-block" }}>
                    <h6>WALLET</h6>
                  </div>
                  <div className="" style={{ display: "inline-block" }}>
                    <img
                      alt="wallet"
                      src={process.env.PUBLIC_URL + "/img/12.jpg"}
                      //src="assets/img/12.jpg"
                      className="img-fluid pos-image2"
                    />
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-3">
              <a href="othersdashboard.html">
                <div className="head_link3 pos-container">
                  <div className="lhs3" style={{ display: "inline-block" }}>
                    <h6>OTHERS</h6>
                  </div>
                  <div className="rhs3" style={{ display: "inline-block" }}>
                    <img
                      alt="others"
                      src={process.env.PUBLIC_URL + "/img/11.jpg"}
                      //src="assets/img/11.jpg"
                      className="img-fluid pos-image3"
                    />
                  </div>
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
