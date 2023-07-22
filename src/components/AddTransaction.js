import React from 'react'

export const AddTransaction = () => {
  return (
    <>
    <h3>Add New Transaction</h3>
      <form>
        <div class = "form-control">
            <label for="text">Text</label>
            <input type="text" placeholder="Enter text..." />
        </div>
        <div class="form-control">
            <label for="amount"
            >Amount <br />
            (negative - expense, positive - income)</label>

            <input type="number" id="amount" placeholder="Enter amount..." />
        </div>
        <div class="btn">Add Transaction</div>
      </form>   
    </>
  )
}

