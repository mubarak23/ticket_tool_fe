import React, { useEffect, useState } from "react";
import NavSide from "../components/NavSide";
const StatusScreen = () => {
  //actionticketlist

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

            <table id="action-table" class="table-head">
              <thead id="action-head">
                <tr className="table-head">
                  <th scope="col">CASE ID</th>
                  <th scope="col">ISSUE</th>
                  <th scope="col">ISSUE TYPE</th>
                  <th scope="col">SUMBITTED BY</th>
                  <th scope="col">ASSIGNED TO</th>
                  <th scope="col">ACTIONS</th>
                </tr>
              </thead>
              <tbody class="action-body">
                <tr>
                  <td>this is good </td>
                  <td>this is good </td>
                  <td>this is good </td>
                  <td>this is good </td>
                  <td>this is good </td>
                  <td>this is good </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StatusScreen;
