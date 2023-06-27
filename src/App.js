import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>welcome to react</h1>
      <Button text={"클릭 버튼"} />
    </div>
  );
}

export default App;
