import React from "react";
import { Counter } from "../../features/counter/Counter";
import DemoContainerComponent from "../../HOC/DemoContainerComponent";
import DemoModalHOC from "../../HOC/DemoModalHOC";
import { ModalHOC } from "../../HOC/ModalHOC";

const Test = () => {
  return (
    <div className="App">
      {/* <DemoContainerComponent /> */}
      {/* <DemoModalHOC /> */}
      {/* <header className="App-header">
            <Counter />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <span>
              <span>Learn </span>
              <a
                className="App-link"
                href="https://reactjs.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React
              </a>
              <span>, </span>
              <a
                className="App-link"
                href="https://redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux
              </a>
              <span>, </span>
              <a
                className="App-link"
                href="https://redux-toolkit.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Redux Toolkit
              </a>
              ,<span> and </span>
              <a
                className="App-link"
                href="https://react-redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Redux
              </a>
            </span>
          </header> */}
    </div>
  );
};

export default Test;
