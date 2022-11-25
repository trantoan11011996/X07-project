import { useEffect } from "react";
import "./App.css";
import MainApp from "./Components/MainApp/MainApp";

function App() {
  useEffect(() => {
    async function fetchListTour() {
      try {
        const requestApi = "http://localhost:5000/api/v1/products";
        const response = await fetch(requestApi);
        const responseJSON = await response.json();

        console.log(responseJSON);
      } catch (error) {
        console.log(error);
      }
    }
    fetchListTour();
  }, []);
  return (
    <div className="App">
      <MainApp />
    </div>
  );
}

export default App;
