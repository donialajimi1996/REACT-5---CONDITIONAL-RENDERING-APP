import React, { Component } from "react";
import "../App.css";

class Box extends Component {
  render() {
    var img = {
      width: 200,
      height: 250
    };
    let gender = {
      borderStyle: "solid",
      borderColor: " blue",
      borderWidth: 3
    };
    if (this.props.gender === "Female") {
      gender = {
        borderStyle: "solid",
        borderColor: " #6f2b38",
        borderWidth: 3
      };
    }
    return (
      <div style={gender}>
        <div>
          <img style={img} src={this.props.source} alt="logo" />
        </div>
        <h4>{this.props.name}</h4>
        <p>{this.props.des}</p>
        <div>
          <i class="fas fa-venus-mars" />:<p>{this.props.gender}</p>
        </div>
      </div>
    );
  }
}

export default Box;
