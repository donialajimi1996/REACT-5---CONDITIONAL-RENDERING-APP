import React, { Component } from "react";
import img1 from "./img1.png";
import img2 from "./img2.jpg";
import img3 from "./img3.jpg";
import img4 from "./img4.jpg";
import "./App.css";
import Box from "./components/box";

class App extends Component {
  render() {
    var Name = {
      padding: 10,
      textAlign: "center",
      color: "dimgray"
    };
    var box = {
      display: "inline-block",
      backgroundColor: "lightgrey",
      width: 1320,
      marginTop: 50,
      marginLeft: 20
    };
    var bloc = {
      display: "inline-block",
      width: 280,
      paddingLeft: 50
    };

    return (
      <div style={box}>
        <h1 style={Name}>Notre équipe</h1>

        <div style={bloc}>
          {" "}
          <Box
            name="Donia Lajimi"
            des="Devloppement Web"
            source={img4}
            gender="Female"
          />
        </div>
        <div style={bloc}>
          {" "}
          <Box
            name="Rayen Chniti"
            des="Developpement Web"
            source={img2}
            gender="Male"
          />
        </div>
        <div style={bloc}>
          {" "}
          <Box
            name="Siwar Lahresh"
            des="Developpement Web"
            source={img3}
            gender="Female"
          />
        </div>
        <div style={bloc}>
          {" "}
          <Box
            name="Zeineb Daghmoura"
            des="Majnouna"
            source={img1}
            gender="Female"
          />
        </div>
      </div>
    );
  }
}

export default App;
