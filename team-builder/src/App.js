import React, {useState} from 'react';
import ReactDOM from "react-dom"
import MembersForm from "./components/MembersForm"
import './App.css';

function App() {
  const [members, SetMembers] = useState([])




  return (
    <div className="App">
      <h1>Test</h1>
      <MembersForm />
    </div>
  );
}

export default App;
