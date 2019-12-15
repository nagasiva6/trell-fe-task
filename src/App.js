import React from "react";
import data from "./data";
import "./App.css";

const STATUS = {
  OPEN: "open",
  CLOSE: "close"
};
// let idGen = 0;
// function newId() {
//   idGen++;
//   console.log(idGen);
//   return idGen;
// }
class Display extends React.Component {
  state = {
    status: STATUS.CLOSE
  };
  toggleDisplay = () => {
    this.setState(prevState => {
      if (prevState.status === STATUS.OPEN) {
        return { status: STATUS.CLOSE };
      }
      return { status: STATUS.OPEN };
    });
  };
  render() {
    const { data, name } = this.props;
    const { status } = this.state;
    const childNames = Object.keys(data) || {};
    return (
      <div>
        <p onClick={this.toggleDisplay}>{`${name} -> STATUS : ${status}`}</p>
        <div className="child-nodes">
          {status === STATUS.OPEN
            ? childNames.map(ele => {
                return <Display data={data[ele] || {}} name={ele} key={ele} />;
              })
            : null}
        </div>
      </div>
    );
  }
}

function App() {
  const names = Object.keys(data) || {};
  const displays = names.map(name => {
    return <Display name={name} data={data[name] || {}} key={name} />;
  });
  return displays.length > 0 ? displays : null;
}

export default App;
