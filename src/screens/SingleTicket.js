import React from "react";

const SingleTicket = ({ match }) => {
  const ticket_case_id = match.params.case_id;
  return (
    <div>
      <h3>Single Ticket Details</h3>
      <h2>{ticket_case_id}</h2>
    </div>
  );
};

export default SingleTicket;
