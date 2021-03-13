import React, { Component } from "react";
import data from "../fakedata.js";
import { useHistory, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { data } = this.props;

    return (
      <main className="main">
        {console.log("home data", this.props)}
        <div className="main-div">
          {/* {console.log(products)} */}
          <h1>Hello You</h1>
          <ul>
            {data.map((prod) => {
              return (
                <li key={prod.id}>
                  <div className="div-shop">
                    <h3>{prod.name}</h3>
                    <h3>${prod.price}</h3>
                    <Link to="/shop/basket">
                      <img src={prod.img} alt="iage" className="img" />
                    </Link>

                    <button className="btn-by"> ADD to list </button>
                    <Link
                      to={{
                        pathname: `/shop/update/${prod.id}`,
                        state: {
                          id: prod.id,
                          prod: prod,
                        },
                      }}
                    >
                      <button className="btn-by"> update </button>
                    </Link>
                    <Link
                      to={{
                        pathname: `/shop/delete/${prod.id}`,
                        state: {
                          id: prod.id,
                          prod: prod,
                        },
                      }}
                    >
                      <button className="btn-by"> delete item </button>
                    </Link>
                  </div>
                </li>
              );
            })}
            <li></li>
          </ul>
        </div>
      </main>
    );
  }
}
