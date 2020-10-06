import React, {useState} from "react"

const MembersForm = () => {
    const [form, setForm] = useState({title: ""})

const handleChanges =(event) => {
    console.log("event", event.target.value)
    setForm({title: event.target.value})
}



return (

    <form>
        <label htmlFor="title">Title</label>
        <input
            id="title"
            type="text"
            placeholder='Enter Title'
            name="title"
            onChange={handleChanges}
            />
        <label htmlFor="FirstName">FirstName</label>
        <input 
            id="FirstName"
            type="text"
            placeholder="Enter Name"
            name="First Name"
            onChange={handleChanges}
        />
        <label htmlFor="LastName">LastName</label>
        <input
            id="LastName"
            placeholder="Enter Last Name"
            type="text"
            name="Last Name"
            onChange={handleChanges}
        />




    </form>

)

}
export default MembersForm