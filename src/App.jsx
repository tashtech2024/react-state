import { useState } from 'react';

import PeopleList from "../components/PeopleList/PeopleList";
import CreatePerson from '../components/CreatePerson/CreatePerson';
// import styles from './app.module.css'

import { people } from "./data/people";
import "./App.css";

function App() {

  const [peopleState, setPeopleState] = useState(people);

  return (
    <>
      {/* <h1 className='{styles.h1}'>React State</h1> */}
      <h1 >React State</h1>

      <PeopleList people={peopleState} />
      <CreatePerson />
    </>
  );
}

export default App;