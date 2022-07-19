import React from "react";
import "./App.css";
import useRequest from "./hooks/UseRequest";

type PetImageResponse = {
  status: string;
  message: string;
};
function App() {
  const [data, loading, error] = useRequest<PetImageResponse>(
    "https://dog.ceo/api/breeds/image/random"
  );

  return (
    <div className="App">
      {Object.keys(error).length > 0 && <p>Something went wrong</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={data?.message} alt="Dog" loading="lazy" />
      )}
    </div>
  );
}

export default App;
