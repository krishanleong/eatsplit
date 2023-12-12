import { useState } from "react";

export default function BillSplit({ friend, onHandleSplit }) {
  const [billValue, setBillValue] = useState(0);
  const [yourExpense, setYourExpense] = useState(0);
  const [iPay, setIPay] = useState(true);

  function handleChangeBill(e) {
    setBillValue(e.target.value);
  }

  function handleYourExpense(e) {
    setYourExpense(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);

    if (iPay) onHandleSplit(friend.id, billValue - parseInt(yourExpense));
    else onHandleSplit(friend.id, -parseInt(yourExpense));
    setBillValue(0);
    setYourExpense(0);
    setIPay(0);
  }

  function handlePayChange(e) {
    setIPay(e.target.value === "Me");
  }
  return (
    <div>
      <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split a bill with {friend.name}</h2>
        <label htmlFor="value">Bill Value</label>
        <input
          type="text"
          name="value"
          value={billValue}
          onChange={(e) => handleChangeBill(e)}
        ></input>
        <label htmlFor="yourExpense">Your Expense</label>
        <input
          type="text"
          name="yourExpense"
          value={yourExpense}
          onChange={(e) => handleYourExpense(e)}
        ></input>
        <label htmlFor="friendExpense">Friend Expense</label>
        <input
          type="text"
          name="friendExpense"
          disabled={true}
          value={billValue - yourExpense}
        ></input>

        <select name="whoPay" onChange={(e) => handlePayChange(e)}>
          Who is paying the Bill?
          <option value="Me">You</option>
          <option vlaue="Friend">{friend.name}</option>
        </select>
        <button className="button">Split bill</button>
      </form>
    </div>
  );
}
