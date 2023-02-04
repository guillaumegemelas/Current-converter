import "./App.css";

import { useState } from "react";
import rates from "./assets/data";

//imports me permettant d'utiliser des icones fontAwesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./img/logo.png";
library.add(faArrowDown, faArrowUp);
//

const tabRates = Object.keys(rates);

function App() {
  const [firstValue, setupFirstValue] = useState(0);
  const [secondValue, setupSecondValue] = useState(0);
  const [firstCurrency, setupFirstCurrency] = useState("AED");
  const [secondCurrency, setupSecondCurrency] = useState("AED");

  //
  return (
    <div className="App">
      <div className="head">
        <span>
          <img src={logo} alt="" />
        </span>
        <h1>Converter</h1>
        <span>
          <img src={logo} alt="" />
        </span>
      </div>

      <div className="Inputs">
        <div className="firstInput">
          <input
            type="number"
            name="first"
            value={firstValue}
            onChange={(event) => setupFirstValue(event.target.value)}
          />
          <select
            onChange={(event) => setupFirstCurrency(event.target.value)}
            selected={firstCurrency}
          >
            {tabRates.map((elem, index) => {
              return (
                <option key={index} value={elem}>
                  {elem}{" "}
                </option>
              );
            })}
          </select>
        </div>

        {/* 2 boutons cliquables ------------------------------------*/}
        <div className="convertButton">
          <div className="convertOne">
            <p
              onClick={() => {
                setupSecondValue(
                  Number((firstValue * rates[secondCurrency]).toFixed(2))
                );
              }}
            >
              <FontAwesomeIcon icon="arrow-down" size="2x" color="black" />
            </p>
          </div>
          <div className="convertOne">
            <p
              onClick={() => {
                setupFirstValue(
                  Number((secondValue / rates[firstCurrency]).toFixed(2))
                );
              }}
            >
              <FontAwesomeIcon icon="arrow-up" size="2x" />
            </p>
          </div>
        </div>
        {/* fin des 2 boutons cliquables ------------------------------------*/}

        <div className="firstInput">
          <input
            type="number"
            name="second"
            value={secondValue}
            onChange={(event) => setupSecondValue(event.target.value)}
          />
          <select
            value={secondCurrency}
            onChange={(event) => setupSecondCurrency(event.target.value)}
          >
            {tabRates.map((elem, index) => {
              return (
                <option key={index} value={elem}>
                  {elem}
                </option>
              );
            })}
          </select>
        </div>

        <button
          className="reset"
          onClick={() => {
            setupFirstValue(0);
            setupSecondValue(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
