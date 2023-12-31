import { useState } from "react";

export function NewTodoForm( {onSubmit} ) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return

    onSubmit(newItem)

    setNewItem("");
  }

  return (
    <>
    <h1 style={{textAlign: "center"}}>TODO APP</h1>
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Todo</label>
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className="btn">Add</button>
    </form>
    </>
  );
}
