import { useState, useEffect } from "react";

function App() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers").then((response) =>
      response.json().then((json) => {
        json.sort((a, b) => {
          return -(a.quotes.USD.price - b.quotes.USD.price);
        });
        setCoins(json);
        setLoading(false);
      })
    );
  }, []);

  return (
    <div>
      <h1>The Coin List</h1>
      {loading ? (
        <h3>now loading...</h3>
      ) : (
        <select>
          {coins.map((item) => (
            <option key={item.id}>
              {item.name}: {item.quotes.USD.price.toFixed(3)}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default App;
