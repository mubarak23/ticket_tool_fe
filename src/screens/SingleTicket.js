import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavSide from "../components/NavSide";
import Loader from "../components/Loader";
import Message from "../components/Message";

const SingleTicket = ({ match, history }) => {
  const ticket_case_id = match.params.case_id;

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {}, [dispatch, history, userInfo]);
  return (
    <div>
      <NavSide />
      <div className="part">
        <div className="container">
          <div className="history_row">
            <div className="history_row1">
              <div className="historylhs" style={{ float: "left" }}>
                <p className="details">DETAILS</p>
              </div>
              <div className="historyrhs" style={{ float: "right" }}>
                <p id="status">SOLVED</p>
              </div>
            </div>

            <div className="history_body" style={{ marginTop: "30px" }}>
              <div className="row">
                <div className="col-sm-6">
                  <div className="history_bodylhs">
                    <div className="history_bodylhs1">
                      <div className="history_bodylhs1_1">
                        <p className="details1">AGENT DETAILS</p>
                      </div>
                      <div className="history_bodylhs1_2">
                        <div
                          className="name"
                          style={{ display: "inline-block" }}
                        >
                          <p className="details2">NAME:</p>
                        </div>
                        <div
                          className="agent_name"
                          style={{
                            display: "inline-block",
                            textTransform: "capitalize;",
                          }}
                        >
                          <h6>MA Name</h6>
                        </div>
                      </div>
                      <div className="history_bodylhs1_3">
                        <div
                          className="name"
                          style={{ display: "inline-block" }}
                        >
                          <p className="details2">EMAIL:</p>
                        </div>
                        <div
                          className="agent_name"
                          style={{ display: "inline-block" }}
                        >
                          <h6>MA Email</h6>
                        </div>
                      </div>
                      <div className="history_bodylhs1_4">
                        <div
                          className="name"
                          style={{ display: "inline-block" }}
                        >
                          <p className="details2">PHONE:</p>
                        </div>
                        <div
                          className="agent_name"
                          style={{ display: "inline-block" }}
                        >
                          <h6>MA phone</h6>
                        </div>
                      </div>
                      <div className="history_bodylhs1_5">
                        <div
                          className="name"
                          style={{ display: "inline-block" }}
                        >
                          <p className="details2">TERMINAL ID:</p>
                        </div>
                        <div
                          className="agent_name"
                          style={{ display: "inline-block" }}
                        >
                          <h6>maTerminalId</h6>
                        </div>
                      </div>
                    </div>
                    <div className="history_bodylhs2">
                      <div className="action">
                        <p className="details2">ACTION TAKEN:</p>
                      </div>
                      <div className="action_taken">
                        <h6>maAction</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="history_bodyrhs history2">
                    <div className="history_bodylhs1_2">
                      <div className="history_bodylhs1_1">
                        <p className="details1">DISPUTE SUMMARY</p>
                      </div>

                      <div>
                        <div className="history_bodylhs1_2">
                          <div
                            className="name"
                            style={{ display: "inline-block" }}
                          >
                            <p className="details2">ISSUE:</p>
                          </div>
                          <div
                            className="agent_name"
                            style={{ display: "inline-block" }}
                          >
                            <h6>maIssue</h6>
                          </div>
                        </div>
                        <div className="history_bodylhs1_2">
                          <div
                            className="name"
                            style={{ display: "inline-block" }}
                          >
                            <p className="details2">ISSUE TYPE:</p>
                          </div>
                          <div
                            className="agent_name"
                            style={{ display: "inline-block" }}
                          >
                            <h6>maIssueType</h6>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="history_bodylhs1_2">
                          <div
                            className="name"
                            style={{ display: "inline-block" }}
                          >
                            <p className="details2">REFERENCE ID:</p>
                          </div>
                          <div
                            className="agent_name"
                            style={{ display: "inline-block" }}
                          >
                            <h6>maReferenceId</h6>
                          </div>
                        </div>
                        <div className="history_bodylhs1_2">
                          <div
                            className="name"
                            style={{ display: "inline-block" }}
                          >
                            <p className="details2">AMOUNT:</p>
                          </div>
                          <div
                            className="agent_name"
                            style={{ display: "inline-block" }}
                          >
                            <h6>maAmount</h6>
                          </div>
                        </div>
                        <div className="history_bodylhs1_2">
                          <div
                            className="name"
                            style={{ display: "inline-block" }}
                          >
                            <p className="details2">COMMENTS:</p>
                          </div>
                          <div
                            className="agent_name"
                            style={{ display: "inline-block" }}
                          >
                            <h6>maComments</h6>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="history_bodylhs1_2">
                          <div
                            className="name"
                            style={{ display: "inline-block" }}
                          >
                            <p className="details2">SUBMITTED BY:</p>
                          </div>
                          <div
                            className="agent_name"
                            style={{ display: "inline-block" }}
                          >
                            <h6>submittedBy</h6>
                          </div>
                        </div>
                        <div className="history_bodylhs1_2">
                          <div
                            className="name"
                            style={{ display: "inline-block" }}
                          >
                            <p className="details2">ASSIGNED TO:</p>
                          </div>
                          <div
                            className="agent_name"
                            style={{
                              display: "inline-block",
                              textTransform: "capitalize",
                            }}
                          >
                            <h6>maAssigned</h6>
                          </div>
                        </div>
                        <div className="history_bodylhs1_2">
                          <div
                            className="name"
                            style={{ display: "inline-block" }}
                          >
                            <p className="details2">DURATION:</p>
                          </div>
                          <div
                            className="agent_name"
                            style={{ display: "inline-block" }}
                          >
                            <h6>Agent Name</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTicket;
