import "./App.css";

function App() {
  return (
    <div class="container">
      <div class="header">
        <h1>ROI Calculator</h1>
        <button>X</button>
      </div>
      <div class="content">
        <div class="lineOne">
          <span>
            <p id="cake">🥞</p>
            <p>CAKE</p>
            <label class="switch">
              <input type="checkbox"/>
              <span class="slider round"></span>
            </label>
            <p>USD</p>
          </span>
        </div>
        <div class="inputLine">
          <input class="input" type="text" value="0.000 USD " />
        </div>
        <div class="lineTwo">
          <span id="dollar">
            <p>$1000</p>
            <p>$100</p>
          </span>
          <span>
            <h6>~CAKE 0.000</h6>
          </span>
        </div>
        <div class="timeFrame">
          <h3>Timeframe</h3>
          <div class="selectionBtn">
            <button>
              <p style={{backgroundColor: '#fceb75', color: "black"}}>1 Day</p>
            </button>
            <button>
              <p>7 Days</p>
            </button>
            <button>
              <p>30 Days</p>
            </button>
            <button>
              <p>1 Year</p>
            </button>
            <button>
              <p>5 Year</p>
            </button>
          </div>
        </div>
        <div class="accelerated">
          <h2>Enable Accelerated APY</h2>
          <label class="switch">
            <input type="checkbox"  />
            <span class="slider round"></span>
          </label>
        </div>
        <div class="lineThree">
          <h3>Select Tier</h3>
          <div class="selectionBtn">
            <button>
              <p style={{backgroundColor: '#fceb75', color: "black"}}>Tier 1</p>
            </button>
            <button>
              <p>Tier 2</p>
            </button>
            <button>
              <p>Tier 3</p>
            </button>
            <button>
              <p>Tier 4</p>
            </button>
            <button>
              <p>Tier 5</p>
            </button>
          </div>
        </div>
        <div class="inputSecond">
          <h6>ROI at Current Rates</h6>
          <input class="input" type="text" value="0.00 USD " />
          <h6>~0.000 CAKE+0.000000 DON</h6>
        </div>
      </div>
      <div class="footer">
        <h4>Hide Details ˄</h4>

        <ul>
          <span>
            <h3>APY</h3>
            <p>9.0 %</p>
          </span>
          <li>&#x25CF; Calculated based on current rates</li>
          <li>
            &#x25CF; All figures are estimates provided for your convenience
            only, and by no means represent guaranteed returns.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
