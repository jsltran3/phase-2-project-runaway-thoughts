import React, { useState } from "react";
import Transaction from "./Transaction";

function TransactionsList({ userEntry, filteredEntries }) {
  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {filteredEntries().map((entry) => (
          <Transaction 
            entry={userEntry}
            key={entry.id}
            id={entry.id}
            date={entry.date}
            description={entry.description}
            category={entry.category}
            amount={entry.amount}
          /> 
        ))
      }
      </tbody>
    </table>
  );
}

export default TransactionsList;
