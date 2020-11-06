import React, { useEffect, useState } from "react";
//import Navbar from "../components/Navbar";
import NavSide from "../components/NavSide";
import "../App.css";
import Footer from "../components/Footer";
//import "../style.css";
import "../custom.css";

const HomeScreen = ({ history }) => {
  const [case_id, setCase_id] = useState("");
  const [agent_name, setAgent_name] = useState("");
  const [agent_email, setAgent_email] = useState("");
  const [user_id, setUser_id] = useState("");
  const [agent_phone, setAgent_phone] = useState("");
  const [terminal_id, setTerminal_id] = useState("");
  const [reference_id, setReference_id] = useState("");
  const [issue_type, setIssue_type] = useState(""); //base on the page
  const [assign_to, setAssign_to] = useState("");
  const [issue, setIssue] = useState("");
  const [submitted_by, setSubmitted_by] = useState(""); //login user
  const [comment, setComment] = useState("");
  const [assign_to_email, setAssign_to_email] = useState("");
  const [RRN, setRRN] = useState("");
  const [amount, setAmount] = useState("");
  const redirect = "/";
  useEffect(() => {
    const userLogin = JSON.parse(localStorage.getItem("userLogin"));
    console.log(userLogin.user_id);
    setSubmitted_by(userLogin.full_name);
    setUser_id(userLogin.user_id);
    setCase_id("5687904");
    setIssue_type("POS");
    if (!userLogin) {
      history.push(redirect);
    }
  }, [history, redirect]);

  const handleIssueCreate = (e) => {
    e.preventDefault();
    const data = {
      case_id,
      user_id,
      submitted_by,
      issue_type,
      issue,
      comment,
      RRN,
      amount,
      agent_email,
      agent_name,
      agent_phone,
      reference_id,
      terminal_id,
      assign_to,
      assign_to_email,
    };
    console.log(data);
  };
  return (
    <div>
      <NavSide />
      <form id="posIssue" onSubmit={handleIssueCreate}>
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
                          id="agent_name"
                          placeholder="Agent Name"
                          value={agent_name}
                          onChange={(e) => setAgent_name(e.target.value)}
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="EMAIL"
                          value={agent_email}
                          onChange={(e) => setAgent_email(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="tel"
                          className="form-control"
                          placeholder="PHONE NUMBER"
                          value={agent_phone}
                          onChange={(e) => setAgent_phone(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="TERMINAL ID"
                          value={terminal_id}
                          onChange={(e) => setTerminal_id(e.target.value)}
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
                        <select
                          name="issue"
                          value={issue}
                          onChange={(e) => setIssue(e.target.value)}
                          className="form-input"
                          id="issue"
                        >
                          <option>SELECT ISSUE</option>
                          <option
                            value="PERR1:Transaction declined but customer's account
                            was debited"
                          >
                            PERR1:Transaction declined but customer's account
                            was debited
                          </option>
                          <option
                            value="PERR2: Transaction approved but agent's wallet was
                            not credited"
                          >
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
                          value={reference_id}
                          onChange={(e) => setReference_id(e.target.value)}
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
                          value={RRN}
                          onChange={(e) => setRRN(e.target.value)}
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control"
                          id="amount"
                          min="0"
                          placeholder="&#8358; AMOUNT"
                          value={amount}
                          onChange={(e) => setAmount(e.target.value)}
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
                          value={comment}
                          maxlength="150"
                          onChange={(e) => setComment(e.target.value)}
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
                          value={assign_to}
                          onChange={(e) => setAssign_to(e.target.value)}
                        >
                          <option>SELECT DEPARTMENT</option>
                          <option value="OPERATIONS">OPERATIONS</option>
                          <option value="FINANCE">FINANCE</option>
                          <option value="TECHNOLOGY">TECHNOLOGY</option>
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
                          value={assign_to_email}
                          onChange={(e) => setAssign_to_email(e.target.value)}
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
      <Footer />
    </div>
  );
};

export default HomeScreen;
