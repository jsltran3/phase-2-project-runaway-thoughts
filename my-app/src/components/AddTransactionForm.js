import React, { useState } from "react";

function AddTransactionForm({ setUserEntry, handleAddEntry }) {
  const [newEntry, setNewEntry] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
  });


  function handleNewEntryChange(event) {
    setNewEntry({...newEntry, [event.target.name]: event.target.value
    });
  }

  function handleSubmit(event) { 
    event.preventDefault();
    const newEntryInfo = ({
      date: newEntry.date,
      description: newEntry.description,
      category: newEntry.category,
      amount: newEntry.amount
    })

    fetch("http://localhost:8001/transactions", {
       method: "POST",
       headers: {
        "Content-Type":"application/json"
      },
       body: JSON.stringify(newEntryInfo)
    })
    .then((resp) => resp.json())
    .then((entry) => handleAddEntry(entry))
  };



  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input 
            type="date" 
            name="date" 
            value={newEntry.date} 
            onChange={handleNewEntryChange} 
            />
          <input type="text" 
            name="description" 
            placeholder="Description" 
            value={newEntry.description} 
            onChange={handleNewEntryChange} 
          />
          <input 
            type="text" 
            name="category" 
            placeholder="Category" 
            value={newEntry.category} 
            onChange={handleNewEntryChange} 
          />
          <input 
            type="number" 
            name="amount" 
            placeholder="Amount" 
            step="0.01" 
            value={newEntry.amount} 
            onChange={handleNewEntryChange} 
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
