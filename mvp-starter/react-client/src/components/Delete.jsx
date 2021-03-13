import axios from "axios";
import React, { Component } from "react";

export default class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onDelete = this.onDelete.bind(this)
  }
  onDelete() {
      const {id} = this.props.location.state;
    axios.delete(`/shop/delete/${id}`).then((res)=> {
        console.log(res)
    }).catch((err)=> {
        console.log(err)
    })
  }
  render() {
    const { prod } = this.props.location.state;
    return (
      <div>
        <h1>Delete</h1>
        {console.log("delete props", prod, '***********', prod.id)}
        <button className="btn-del" type="submit" onClick={this.onDelete}>
          do you realy want to delete this {prod.name} from shop
        </button>
        <div>
          <p style={{fontFamily:'inherit', fontSize:"20px"}}>{prod.name}</p>
          <p>{prod.price}</p>
          <img src={prod.img} alt="" srcset="" className="del-img"/>
        </div>
      </div>
    );
  }
}
