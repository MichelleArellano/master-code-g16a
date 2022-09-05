import { useState, Fragment } from "react";
import "./App.css";
import Counter from "./Counter";
import UserActive from "./UserActive";

function App() {
  const [count, setCount] = useState(3);
  const [age] = useState(4);
  const [isActive] = useState(true);

  const showGreeting = (numb) => {
    // let result = "";
    // if (numb >= 18) {
    //   result = "Eres mayor de edad 🍻";
    // } else {
    //   result = "no puedes tomar alcohol";
    // }
    // return result;

    // return  (age >= 18) ? 'Hola, eres mayor de edad 😎' : 'No eres mayor de edad 😕';
    const message =
      numb >= 18 ? (
        <span>Hola, eres mayor de edad 😎</span>
      ) : (
        <span>No eres mayor de edad 😕</span>
      );

    return message;
  };

  const h1ActStyle = { border: "3px solid #f4f0f0", width: 250 };
  const h1InactStyle = { border: "3px solid #d45252", width: 350 };

  return (
    <div className="App">
      <h1 className={isActive ? "title-active" : "title-inactive"}>
        Vite + React
      </h1>
      <div className="card" style={isActive ? h1ActStyle : h1InactStyle}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      {/* JSX */}
      {showGreeting(18)}

      {/* CONDTIONAL RENDERING */}
      {/*  { IF () 👉🏽 validacion && component } */}
      {count > 2 && <Counter />}

      {/*  { IF ELSE () 👉🏽 validacion ? TRUE : FALSE  } */}
      {isActive ? <UserActive /> : <h4>Usuario NO activo</h4>}

      {/*  { IF ELSE IF ELSE  👉🏽 validacion ? TRUE : validacion2 ? TRUE2 : FALSE */}
      {age >= 18 ? (
        <strong> Eres mayor de edad</strong>
      ) : age < 18 && age >= 12 ? (
        <b> Eres un adolescente</b>
      ) : (
        <h5>Eres un niño</h5>
      )}
    </div>
  );
}

export default App;
