import React, { useEffect } from "react";
//import Navbar from "../components/Navbar";
import NavSide from "../components/NavSide";
import "../App.css";
import { Container, Row, Col } from "react-bootstrap";
//import "../style.css";
import "../custom.css";

const HomeScreen = ({ history }) => {
  const redirect = "/";
  useEffect(() => {
    const userLogin = localStorage.getItem("userLogin");
    if (!userLogin) {
      history.push(redirect);
    }
  }, [history, redirect]);
  return (
    <div>
      <NavSide />
      <form id="posIssue">
        <div className="part">
          <div className="container">
            <div className="row1">
              <div className="caseid">
                <div className="caseid1" style={{ display: "inline-block" }}>
                  <h6>CASE ID: </h6>
                </div>
                <div className="caseid2" style={{ display: "inline-block" }}>
                  <h6 id="case_id" name="case_id"></h6>
                </div>
              </div>
              <div className="rowhead">
                <div className="rowhead_header">
                  <h6>AGENT DETAILS</h6>
                </div>
                <div className="rowbody_body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="MA_name"
                          placeholder="NAME"
                          value=""
                          name="MA_name"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="MA_email"
                          placeholder="EMAIL"
                          value=""
                          name="MA_email"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="tel"
                          className="form-control"
                          id="MA_phone"
                          placeholder="PHONE NUMBER"
                          value=""
                          name="MA_phone"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="MA_terminal_id"
                          placeholder="TERMINAL ID"
                          value=""
                          name="MA_terminal_id"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row2">
              <div className="rowhead">
                <div className="rowhead_header">
                  <h6>ISSUE</h6>
                </div>
                <div className="rowbody_body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <select name="issue" className="form-input" id="issue">
                          <option>SELECT ISSUE</option>
                          <option>
                            PERR1:Transaction declined but customer's account
                            was debited
                          </option>
                          <option>
                            PERR2: Transaction approved but agent's wallet was
                            not credited
                          </option>
                        </select>
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="reference_id"
                          placeholder="ENTER REFERENCE ID"
                          value=""
                          name="reference_id"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="RRN"
                          placeholder="ENTER RRN (POS)"
                          value=""
                          name="RRN"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control"
                          id="amount"
                          min="0"
                          placeholder="&#8358; AMOUNT"
                          value=""
                          name="amount"
                        />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea
                          className="form-control"
                          id="comment"
                          placeholder="COMMENTS"
                          rows="4"
                          value=""
                          maxlength="150"
                          name="comment"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row3">
              <div className="rowhead">
                <div className="rowhead_header">
                  <h6>ASSIGN ISSUE TO</h6>
                </div>
                <div className="rowbody_body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <select
                          name="assign_to"
                          className="form-input"
                          id="assign_to"
                        >
                          <option>SELECT DEPARTMENT</option>
                          <option>OPERATIONS</option>
                          <option>FINANCE</option>
                          <option>TECHNOLOGY</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="assign_to_email"
                          placeholder="EMAIL ADDRESS"
                          value=""
                          name="assign_to_email"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row4">
              <div className="button">
                <div className="row">
                  <div class="col-md-12">
                    <input
                      type="submit"
                      action="post"
                      className="butttonarea1"
                      value="SEND"
                      id="posSubmit"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default HomeScreen;
