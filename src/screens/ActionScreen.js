import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavSide from "../components/NavSide";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { myticketlist } from "../actions/ticketActions.js";

const ActionScreen = ({ history }) => {
  const [user_id, setUser_id] = useState("");
  //const [tickets, setTickets] = useState("");

  const dispatch = useDispatch();
  const ticketlist = useSelector((state) => state.ticketlist);
  console.log(ticketlist);
  const { loading, error, tickets } = ticketlist;
  console.log(tickets);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //const ticket_lists = async () => {
  //return await axios.get(
  //`https://intense-escarpment-06842.herokuapp.com/api/ticket/user_ticket_lists/${user_id}`
  //);
  //};

  useEffect(() => {
    setUser_id(userLogin.user_id);
    //console.log(user_id);
    //const url = `http://127.0.0.1:8001/api/ticket/user_ticket_lists/${user_id}`;
    //const url = "http://127.0.0.1:8001/api/ticket/user_ticket_lists/1";
    //const url = `https://intense-escarpment-06842.herokuapp.com/api/ticket/user_ticket_lists/1`;
    console.log(userInfo.id);
    if (userLogin) {
      dispatch(myticketlist(userInfo.user_id));
      console.log(tickets);
    } else {
      history.push("/");
    }
  }, [dispatch, history, userInfo]);

  return (
    <div>
      <NavSide />

      <form>
        <div className="part">
          <div className="container">
            <form id="actionSearchForm">
              <div class="search_row">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="box1">
                      <div className="form-group">
                        <select
                          name="searchby"
                          className="form-input select-input"
                        >
                          <option>SEARCH BY CASE ID</option>
                          <option> Sales Representative </option>
                          <option> Customer Care Representative </option>
                          <option> Software Developer </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-5">
                    <div className="box2">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control select-input"
                          id="case_id"
                          placeholder="ENTER CASE ID"
                          value=""
                          name="case_id"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-3">
                    <div className="box3">
                      <input
                        type="button"
                        action="post"
                        className="butttonarea2 select-input"
                        value="SEARCH"
                        id="action-search"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <div class="search_row2">
              <div className="box0" style={{ display: "inline-block" }}>
                <input type="checkbox" />
              </div>
              <div
                className="box1 select-input"
                style={{ display: "inline-block" }}
              >
                <div className="form-group">
                  <select
                    name="searchby"
                    className="form-input2 select-input"
                    id="transfer-actions"
                  >
                    <option>SELECT ACTION</option>
                  </select>
                </div>
              </div>
              <div className="box4" style={{ display: "inline-block" }}>
                <input
                  type="button"
                  action="post"
                  class="butttonarea3 select-input"
                  value="SUBMIT"
                  onclick="TakeAction()"
                  id="take-action"
                />
              </div>
            </div>
            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader />}
            <table id="action-table" class="table-head">
              <thead id="action-head">
                <tr className="table-head">
                  <th scope="col"></th>
                  <th scope="col">CASE ID</th>
                  <th scope="col">ISSUE</th>
                  <th scope="col">ISSUE TYPE</th>
                  <th scope="col">SUMBITTED BY</th>
                  <th scope="col">ASSIGNED TO</th>
                  <th scope="col">CREATED ON</th>
                </tr>
              </thead>
              <tbody>
                {tickets &&
                  tickets.map((ticket) => (
                    <tr>
                      <td key={ticket.id}></td>
                      <td>
                        <Link to={`/single_ticket/${ticket.case_id}`}>
                          {ticket.case_id}
                        </Link>
                      </td>
                      <td>{ticket.issue}</td>
                      <td>{ticket.issue_type}</td>
                      <td>{ticket.submitted_by}</td>
                      <td>{ticket.assign_to}</td>
                      <td>{ticket.created_at}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ActionScreen;
