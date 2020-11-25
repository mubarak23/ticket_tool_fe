import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavSide from "../components/NavSide";
import Loader from "../components/Loader";
import Message from "../components/Message";
import NavSingle from "../components/NavSingle";
//import { myticketlist } from "../actions/ticketActions.js";
import { singleticket, updateticketstatus } from "../actions/ticketActions.js";
import { createAction } from "../actions/IssueAction.js";

const TiicketIssue = ({ history, match }) => {
  const case_id = match.params.case_id;
  const [user_id, setUser_id] = useState("");
  const [actions, setActions] = useState("");
  const [status, setStatus] = useState("");
  //const [tickets, setTickets] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(userInfo);
  const ticket = useSelector((state) => state.TicketIssue);
  //console.log(ticket);
  const { loading, error, singleTicket } = ticket;
  console.log(singleTicket);

  const TicketAction = useSelector((state) => state.createTicketAction);
  const {
    loading: loadedaction,
    success: successaction,
    error: erroraction,
    actionDetails: action,
  } = TicketAction;

  const updateTicket = useSelector((state) => state.updateticketstatus);
  const {
    loading: loadedstatus,
    success: successstatus,
    error: errorstatus,
  } = updateTicket;

  useEffect(() => {
    console.log(case_id);
    console.log("beore useEffect");
    dispatch(singleticket(case_id));
    console.log("After the dispatch");
  }, [dispatch, case_id, successaction, successstatus]);
  console.log("after useEffect");

  const handleActionSubmit = (e) => {
    e.preventDefault();
    console.log("from action handle");
    const data = {
      case_id,
      user_id: singleTicket.user_id,
      issue_type: singleTicket.issue_type,
      assign_to: singleTicket.assign_to,
      submitted_by: singleTicket.submitted_by,
      issue: singleTicket.issue,
      actions,
    };
    console.log(data);
    dispatch(createAction(data));
    console.log("after dispatch is called");
  };

  const handleStatusUpdate = (e) => {
    e.preventDefault();
    console.log("from the status update function");
    const statusdata = {
      case_id,
      user_id: singleTicket.user_id,
      status,
    };
    console.log(statusdata);
    dispatch(updateticketstatus(statusdata));
    console.log("after update ticket status");
  };

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
              <div class="search_row2">
                <form onSubmit={handleActionSubmit}>
                  <div
                    className="box1 select-input"
                    style={{ display: "inline-block" }}
                  >
                    <div className="form-group">
                      <select
                        name="searchby"
                        className="form-input2 select-input"
                        id="transfer-actions"
                        onChange={(e) => setActions(e.target.value)}
                      >
                        <option>SELECT ACTION</option>
                        <option value="Check with the Bank">
                          Check with the Bank
                        </option>
                        <option value="Restart the device">
                          Restart the device
                        </option>
                        <option value="Install a New App">
                          Install a New App
                        </option>
                        <option value="clear app cache">Clear app cache</option>
                      </select>
                    </div>
                  </div>
                  <div className="box4" style={{ display: "inline-block" }}>
                    <input
                      type="submit"
                      className="butttonarea3 select-input"
                      value="Add Action"
                    />
                  </div>
                </form>
              </div>

              <div class="search_row2">
                <form onSubmit={handleStatusUpdate}>
                  <div
                    className="box1 select-input"
                    style={{ display: "inline-block" }}
                  >
                    <div className="form-group">
                      <select
                        name="searchby"
                        className="form-input2 select-input"
                        id="transfer-actions"
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option>SELECT STATUS</option>
                        <option value="In progress">In Progress</option>
                        <option value="Unresolved">Unresolved</option>
                        <option value="Deadlock">Deadlock</option>
                        <option value="Resolved">Resolved</option>
                      </select>
                    </div>
                  </div>
                  <div className="box4" style={{ display: "inline-block" }}>
                    <input
                      type="submit"
                      class="butttonarea3 select-input"
                      value="Update Status"
                    />
                  </div>
                </form>
              </div>

              <div className="history_row1">
                <div className="historylhs" style={{ float: "left" }}>
                  <p className="details">DETAILS</p>
                </div>
                <div className="historyrhs" style={{ float: "right" }}>
                  <p id="status">{singleTicket.status}</p>
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
