


import React, { Component } from 'react'
import Form from './Form.jsx'
export default class Autentication extends Component {

  constructor(props){
    super(props);
    this.state={
      view:"login"
    }
this.create=this.create.bind(this);
  }
create(){
this.setState({view:"create"})
}
  render() {
    const {view} = this.state;
    return (
      <div className='auth'>
      {view === "login" ? <div className="login-container">
             <div className="head">
               <input type="email"  placeholder='Your Email'/>
               <br />
               <br />
               <input type="password" placeholder='Your password'/>
               <br />
               <button type="submit">Log In</button>
               <br />
               <button className='create-account' onClick={this.create}>Create Account</button>
               <br />
             </div>
           </div> : <Form/>
           }
     </div>
    )
  }
}


