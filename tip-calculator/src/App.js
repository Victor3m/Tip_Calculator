import React, { useState } from "react";
import "./App.css";

function App() {
  const [bill, setBill] = useState("");

  const onBillChange = (event) => {
    event.target.validity.valid ? setBill(event.target.value) : setBill(bill);
  };

  const [tip, setTip] = useState("");

  const onTipChange = (event) => {
    event.target.validity.valid ? setTip(event.target.value) : setTip(tip);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Tip Calculator</h1>
      </header>
      <body>
        <div>
          <label htmlFor="billamnt">Bill Amount ($)</label>
          <br />
          <input
            type="text"
            id="billamnt"
            placeholder="$0.00"
            pattern="[$]{0,1}[0-9]*\.{0,1}[0-9]{0,2}"
            onChange={onBillChange}
            value={bill}
          />
        </div>
        <div>
          <label htmlFor="tipamnt">Tip Percentage (0% - 100%)</label>
          <br />
          <input
            type="text"
            id="tipamnt"
            placeholder="0%"
            pattern="([0-1]{0,1}[0]{2}[%]{0,1})|[0-9]{0,2}[%]{0,1}"
            onChange={onTipChange}
            value={tip}
          />
        </div>
        <div>
          <CalculateTip tip={tip} bill={bill} />
        </div>
      </body>
    </div>
  );
}

function CalculateTip({ tip, bill }) {
  var tiprx = String(tip).replace(/%/, "");
  var billrx = String(bill).replace(/[$]/, "");
  var tipamnt = (billrx * (tiprx / 100)).toFixed(2);
  var total = (Number(billrx) + Number(tipamnt)).toFixed(2);
  return (
    <div>
      <p id="tip">Tip Amount: ${tipamnt}</p>
      <p id="total">Total Bill: ${total}</p>
    </div>
  );
}

export default App;
