import React, {useState} from "react"

const MembersForm = (props) => {
    const [form, setForm] = useState({title: "", firstName: "", lastName: "", email: "" })

const handleChanges =(event) => {
    console.log("e", event)
    console.log("event", event.target.value)
    console.log("target", event.target)
    setForm({...form, [event.target.name]: event.target.value})
}

const submitForm = event => {
    event.preventDefault()
    props.addNewMember(form)
}



return (

    <form onSubmit={submitForm}>
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
            name="firstName"
            onChange={handleChanges}
        />
        <label htmlFor="LastName">LastName</label>
        <input
            id="LastName"
            placeholder="Enter Last Name"
            type="text"
            name="lastName"
            onChange={handleChanges}
        />
        <label htmlFor="email">Email</label>
        <input 
            id="email"
            type="email"
            placeholder="Enter Email adddress"
            name="email"
            onChange={handleChanges}
        />
        <button type="submit">Update Now</button>
    </form>

)

}
export default MembersForm