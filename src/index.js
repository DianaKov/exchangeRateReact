import React from "react";
import ReactDOM  from "react-dom";
import data from "./data";
import "./style.css";

function App() {
    return (
      <div>
        <h1>Курс валют</h1>
        <table className="currency-table">
          <thead>
            <tr>
              <th>Код валюти</th>
              <th>Назва валюти</th>
              <th>Курс</th>
              <th>Дата</th>
            </tr>
          </thead>
          <tbody>
            {data.map((currency) => (
              <tr key={currency.cc}>
                <td>{currency.cc}</td>
                <td>{currency.txt}</td>
                <td>{currency.rate.toFixed(2)}</td>
                <td>{currency.exchangedate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default App;

ReactDOM.render(<App/>, document.getElementById('body'));

console.dir(data)