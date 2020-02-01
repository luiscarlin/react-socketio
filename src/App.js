import React from "react";
// import { subscribeToTimer } from "./api";
import styled from "styled-components";

const AppWrapper = styled.h1`
  text-align: center;
  font-size: 100px;
  color: black;
`;

function App() {
  return <AppWrapper>Hello World!</AppWrapper>;

  // constructor(props) {
  //   super(props);

  // const callback = (err, timestamp) =>
  //   this.setState({
  //     timestamp
  //   });

  // subscribeToTimer(1000, callback);
  // }

  // state = {
  //   timestamp: "no timestamp yet"
  // };

  // render() {
  //   return <AppWrapper >Hello World! {this.state.timestamp}</AppWrapper>;
  // }
}

export default App;
