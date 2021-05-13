/* eslint-disable */
import React, { Component } from "react";
import Button from "./Button";
import "./Calculator.css";
import DisplayCalc from "./DisplayCalc";
import Keypad from "./Keypad";

class Calculator extends Component {
  constructor() {
    super();
    this.state = { data: "" };
  }

  calculate = () => {
    try {
      const result = eval(this.state.data);
      this.setState({ data: JSON.stringify(result) });
    } catch (e) {
      this.setState({ data: "Invalid Input"  });
    }
  };

  clearOne = () => {
    this.setState({ data: this.state.data ==="Invalid Input" ? "": this.state.data.slice(0, -1) });
  };

  handleClick = value => () => {
    if(value==="equal" && this.state.data==="" ){
      return null
    }
    switch (value) {
      case "clear":
        this.setState({ data: "" });
        break;
      case "equal":
        this.calculate();
        break;
      case "clearOne":
        this.clearOne();
        break;
      default:
        this.setState({ data: this.state.data + value });
    }
  };

  render() {
    const intialData = [
      {
        lable: "C",
        value: "clear",
        color: "red"
      },
      {
        lable: "9",
        value: "9"
      },
      {
        lable: "6",
        value: "6"
      },
      {
        lable: "3",
        value: "3"
      },
      {
        lable: "0",
        value: "0"
      },
      {
        lable: "<--",
        value: "clearOne",
        color: "red"
      },
      {
        lable: "8",
        value: "8"
      },
      {
        lable: "5",
        value: "5"
      },
      {
        lable: "2",
        value: "2"
      },
      {
        lable: ".",
        value: "."
      },
      {
        lable: "%",
        value: "%",
        color: "red"
      },
      {
        lable: "7",
        value: "7"
      },
      {
        lable: "4",
        value: "4"
      },
      {
        lable: "1",
        value: "1"
      },
      {
        lable: "",
        value: "equal",
        color: "red"
      },
      {
        lable: "/",
        value: "/",
        color: "red"
      },

      {
        lable: "*",
        value: "*",
        color: "red"
      },
      {
        lable: "-",
        value: "-",
        color: "red"
      },
      {
        lable: "+",
        value: "+",
        color: "red"
      },
      {
        lable: "=",
        value: "equal",
        color: "#FFFF"
      }
    ];

    return (
      <div className="Calculator">
        <DisplayCalc data={this.state.data} />
        <Keypad>
          {intialData.map((data, i) => {
            return (
              <Button
                key={i}
                onClick={this.handleClick(data.value)}
                label={data.lable}
                color={data.color ? data.color : ""}
              />
            );
          })}
        </Keypad>
      </div>
    );
  }
}

export default Calculator;
