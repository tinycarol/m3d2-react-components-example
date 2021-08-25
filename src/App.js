import "./App.css";
import React from "react";
import Clock from "./components/clock/Clock";
import UserCard from "./components/userCard/UserCard";
import pepeAvatar from "./assets/pepe.svg";
import pipaAvatar from "./assets/pipa.png";
import pipAvatar from "./assets/pipo.svg";
import HorizontalList from "./components/horizontalList/HorizontalList";

// Using function component
/* export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

const pepe = {
  name: "Pepe",
  age: 29,
  avatar: pepeAvatar,
};

const pipa = {
  name: "Pipa",
  age: 45,
  avatar: pipaAvatar,
};

const pip = {
  name: "Pip",
  age: 95,
  avatar: pipAvatar,
};

// Using class component
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <HorizontalList>
          <UserCard user={pepe} />
          <UserCard user={pipa} />
          <UserCard user={pip} />
          <UserCard user={pip} />
          <UserCard user={pip} />
          <UserCard user={pip} />
          <UserCard user={pip} />
          <UserCard user={pip} />
        </HorizontalList>

        <HorizontalList>
          <Clock showMinutes showSeconds />
          <Clock showMinutes />
          <Clock />
        </HorizontalList>
      </div>
    );
  }
}
