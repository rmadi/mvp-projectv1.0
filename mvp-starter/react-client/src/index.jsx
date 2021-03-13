import React from "react";
import ReactDOM from "react-dom";
import Nav from "./components/Nav.jsx";
import Autentication from "./components/Autentication.jsx";
import Shop from "./components/Shop.jsx";
import Form from './components/Form.jsx'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Basket from "./components/Basket.jsx";
import axios from "axios";
import Delete from './components/Delete.jsx'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      goto : false,
      data : []
    };
    
  }
  

  componentDidMount() {
    axios.get("/shop/data").then((res) => {
      this.setState({
        data: res.data,
        
      });
    });
  }
  render() {
    return (
      <Router>
        <div className='row'>
          <Nav />
          <Switch>
            <Route path="/" exact component={Autentication}></Route>
            <Route path="/signin" component={Form}>
              
            </Route>
            <Route path="/shop" exact >
              <Shop data={'home data',this.state.data} />
            </Route>
            <Route path='/shop/update' component={Basket}></Route>
            <Route path='/shop/delete' component={Delete}>

            </Route>
          </Switch>
          <img src="https://shetechexplorer.com/wp-content/uploads/2019/01/galvanize.png" alt=""/>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));


