import React from "react";
import "./Shopping.css";

//Importing Array of Data 
import {ShoppingData} from "../../Data"

//Importing Assets Components
import Header from "./assets/Header";
import Filter from "./assets/Filter/Filter";
import ItemsHolder from "./assets/ItemHolder/ItemsHolder";


class Shopping extends React.Component {
  
  
  constructor(props) {
    super(props);
    
    this.onClick = this.onClick.bind(this);
    this.state={
      data:[]
    }
  }


  //CallBack function for Search or Query
  onClick(e) {
    let rvalue='';
    if (e.target.children[0] !== undefined) {
     rvalue=e.target.children[0].innerHTML
    } else {
      rvalue=e.target.value
    }
    const [value,cat]=rvalue.split(';');
    console.log(value,cat);
    const Data=ShoppingData.filter(record=>record.name===value|| record.cat===value|| record.realPrice==value || record.outPrice==value || record.description===value)
    this.setState({data:Data})




  }

  render() {
    return (
      <React.Fragment>
        <Header onClick={this.onClick}/>
        <div className="list-section">
          <Filter onClick={this.onClick} />
          <ItemsHolder Data={this.state.data} />
        </div>
      </React.Fragment>
    );
  }
}

export default Shopping;
