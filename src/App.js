import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Hello() {
  const [counter, setCounter] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("this line will be printed only if `Hello Fn` has been worked");
    return () => {
      console.log("Hello Fn destroyed");
    };
  }, []);

  useEffect(() => {
    console.log("when the value of search changes");
  }, [search]);

  const onChange = (event) => {
    setSearch(event.target.value);
  };

  const onClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <h1 className={styles.title}>welcome to react</h1>
      <input
        value={search}
        onChange={onChange}
        placeholder="searching for"
      ></input>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>count up</button>
    </div>
  );
}

function App() {
  const [hide, setHide] = useState(true);

  const onClick = () => {
    setHide((prev) => !prev);
  };

  return (
    <div>
      <button onClick={onClick}>{hide ? "hide" : "show"}</button>
      {hide ? <Hello /> : null}
    </div>
  );
}

export default App;
