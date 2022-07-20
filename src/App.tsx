import React from "react";
import "./App.css";
import { useRequest } from "./hooks/UseRequest";

function App() {
  let { dogImage, error, isPending, refetch } = useRequest();
  console.log("isPending :>> ", isPending);

  return (
    <div className="App">
      {error && <pre>ERROR! {error}...</pre>}
      {isPending && <pre>LOADING...</pre>}
      <pre>{JSON.stringify(dogImage)}</pre>
      {!isPending && (
        <button onClick={refetch}>
          <img src={dogImage?.message} alt="Dog" />
        </button>
      )}
    </div>
  );
}

export default App;
