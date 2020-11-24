import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavSide from "../components/NavSide";
import Loader from "../components/Loader";
import Message from "../components/Message";
//import { myticketlist } from "../actions/ticketActions.js";
import { singleticket } from "../actions/ticketActions.js";
import SingleTicket from "./SingleTicket";

const TiicketIssue = ({ history, match }) => {
  const case_id = match.params.case_id;
  const [user_id, setUser_id] = useState("");
  //const [tickets, setTickets] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(userInfo);
  const ticket = useSelector((state) => state.TicketIssue);
  //console.log(ticket);
  const { loading, error, singleTicket } = ticket;
  console.log(singleTicket);

  useEffect(() => {
    console.log(case_id);
    console.log("beore useEffect");
    //dispatch(singleticket(case_id));
    console.log("After the dispatch");
  }, [dispatch, case_id]);
  console.log("after useEffect");
  return (
    <>
      <NavSide />
      <div className="part">
        <div className="container">
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
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
                            <p className="details2">NAME: </p>
                          </div>
                          <div
                            style={{
                              display: "inline-block",
                              textTransform: "capitalize;",
                            }}
                          >
                            {singleTicket.agent_name}
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
                            {singleTicket.agent_email}
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
                            {singleTicket.agent_phone}
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
                            {singleTicket.terminal_id}
                          </div>
                        </div>
                      </div>
                      <div className="history_bodylhs2">
                        <div className="action">
                          <p className="details2">ACTION TAKEN:</p>
                        </div>
                        <div className="action_taken">
                          <h6>{singleTicket.actions}</h6>
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
                              className="name"
                              style={{ display: "inline-block" }}
                            >
                              <p>{singleTicket.issue}</p>
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
                              {singleTicket.issue_type}
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
                              {singleTicket.reference_id}
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
                              <h6>{singleTicket.amount}</h6>
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
                              <p>{singleTicket.comment}</p>
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
                              <p>{singleTicket.submitted_by}</p>
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
                              <p>{singleTicket.assign_to_email}</p>
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
                              {singleTicket.duration}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TiicketIssue;
