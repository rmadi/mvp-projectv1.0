import axios from "axios";
import React, { Component } from "react";

export default class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      price: "",
      img: "",
    };
    this.handleIput = this.handleIput.bind(this);
    this.onupdate = this.onupdate.bind(this);
  }
  // hhandle my input and chnage the state to the value that i write
  handleIput(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state);
  }

  // submit function to posted in my database
  onupdate() {
    // e.preventDefault();
    const { name, price, img } = this.state;
    const { id } = this.props.location.state;
  //  using axios to put reuest 
  axios.put(`/shop/update/${id}`,{name, price, img}).then((res)=>{
    console.log(res)
  }).catch((err)=>{console.log(err)})
  }


  render() {
    const { id } = this.props.location.state;
    console.log("this is my id", id);
    return (
      <div>
        <div>
          {console.log(
            this.props.location.state.id,
            "\n data one",
            this.props.location.state.prod,
            "alldata",
            this.props
          )}
          <form action="">
            <label htmlFor="Fname">name of Item: </label>
            <input
              name="name"
              type="text"
              placeholder="type your Name of Item "
              onChange={this.handleIput}
            />
            <label htmlFor="Fname">Price of Item : </label>
            <input
              name="price"
              type="number"
              placeholder="Put a new Price "
              onChange={this.handleIput}
            />
            <label htmlFor="Fname">image URL : </label>
            <input
              name="img"
              type="text"
              placeholder="your url image "
              onChange={this.handleIput}
            />

            <button className="btn-form" type="submit" onClick={this.onupdate}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
