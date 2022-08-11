import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [userEntry, setUserEntry] = useState([]);
  const [term, setTerm]= useState("");

  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then((resp) => resp.json())
      .then((entries) => {
        setUserEntry(entries)
        console.log(entries.category)
      });
  }, []);
  
  function handleAddEntry(entry) {
    setUserEntry([...userEntry, entry]);
  } 

  const filteredEntries = () => {
    return userEntry.filter((entry) =>
    Object.values(entry).join("").toLowerCase().includes(term.toLowerCase())
    )};

  return (
    <div>
      <Search term={term} setTerm={setTerm} />
      <AddTransactionForm setUserEntry={setUserEntry} handleAddEntry={handleAddEntry} />
      <TransactionsList userEntry={userEntry} filteredEntries={filteredEntries} />
    </div>
  );
}

export default AccountContainer;
