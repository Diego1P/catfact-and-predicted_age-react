import './App.css';
import Axios from "axios"
import {useEffect, useState} from "react"

/*
fetch("https://catfact.ninja/fact").then((resposnse) => resposnse.json()).then((data) => {
  console.log(data);
});
*/

function App() {

  const [catFact, setcatFact] = useState("");
  const [name, setName] = useState("");
  const [predictedAge, setpredictedAge] = useState({});
  

  const fetchCatFact = () => {
    Axios.get("https://catfact.ninja/fact").then((response) => {
      setcatFact(response.data.fact);
    });
  };

  useEffect(() => {
    Axios.get("https://catfact.ninja/fact").then((response) => {
      setcatFact(response.data.fact);
    });
  }, []);

  const fetchData = () => {
    Axios.get(`https://api.agify.io/?name=${name}`).then((response) => {
      //setcatFact(response.data.fact);
      setpredictedAge(response.data)
    });
  };

  return (
    <div className="App">
      <div className='catFact'>
        <button onClick={fetchCatFact}>generate cat fact</button>
        <p> {catFact} </p>
      </div>

      <div className='agePredict'>
        <input placeholder="ex. diego..." onChange={(event) => {setName(event.target.value);}} />
        <button onClick={fetchData}> Predict Age </button>
        <h1> predicted Name: {predictedAge.name}</h1>
        <h1> predicted Age: {predictedAge.age}</h1>
        <h1> predicted Count: {predictedAge.count}</h1>
      </div>
      

    </div>
  );
}

export default App;
