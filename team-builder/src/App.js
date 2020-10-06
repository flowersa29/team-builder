import React, {useState} from 'react';
import ReactDOM from "react-dom"
import MembersForm from "./components/MembersForm"
import TeamMembers from "./components/TeamMembers"
import './App.css';

function App() {
  
  const {members, setMembers} = useState([

    {
      id: 1,
      title: "fueler",
      firstname: "John",
      lastname: "Smith",
      email:""
  }, 

  ])

  const addNewMember = members => {
   const newMember ={
     id: Date.now(),
     title: members.title,
     firstname: members.firstname,
     lastname: members.lastname,
     email: members.email
    } 

    setMembers([...members, newMember])

  }


  return (
    <div className="App">
      <h1>Test</h1>
      <MembersForm addNewMember={addNewMember} />
    </div>
  );
}

export default App;
