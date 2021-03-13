import axios from "axios";
import React, { Component } from "react";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
    this.onCheck = this.onCheck.bind(this);
    this.handleIput =this.handleIput.bind(this);
    this.onRegister = this.onRegister.bind(this);
    
  }
  // hhandle my input and chnage the state to the value that i write
  handleIput(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
    console.log(this.state)
  }
  onCheck() {
    // desctruct my state
    const { firstname, lastname, email, password } = this.state;
    // regex for my forms it's simply to check if the user name or emil or pasword comform
    const mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passformat = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;
    const nameformat = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
    if (
      firstname.match(nameformat) &&
      lastname.match(nameformat) &&
      password.match(passformat) &&
      email.match(mailformat)
    ) {
      return true;
    } else {
      return false;
    }
  }
  // submit function to posted in my database 
  onRegister() {
    // e.preventDefault();
   const {firstname, lastname, email, password} = this.state;
axios.post(`/sighin/register`, {
  firstname, lastname, email, password
}).then((res)=> {
  console.log(res)
}).catch((err)=> {console.log(err)})   
   
   }
   
  

  render() {
    return (
      <div>
        <div>
          <form action="">
            <label htmlFor="Fname">FirstName : </label>
            <input
              name="firstname"
              type="text"
              placeholder="type your first name here "
              onChange={this.handleIput}
            />
            <label htmlFor="Fname">LAstName : </label>
            <input
              name="lastname"
              type="text"
              placeholder="type your last name here "
              onChange={this.handleIput}
            />
            <label htmlFor="Fname">Email : </label>
            <input
              name="email"
              type="email"
              placeholder="type your e-mail here "
              onChange={this.handleIput}
            />
            <label htmlFor="Fname">Password : </label>
            <input name="password" type="password" placeholder="password "  onChange={this.handleIput}/>

            <button className="btn-form" type="submit" onClick={ this.onRegister}>
              Submit
            </button >  
          </form>
        </div>
      </div>
    );
  }
}
