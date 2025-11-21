import React, { Component } from 'react'


export default class Home extends Component {
  render() {
    return (
      <div>Home
    <App1 />
    </div>
    )
  }
}

function App1() {
const name="Adarsh";
  return (
    <div>
      <h1>Welcome</h1>
      <Greet fname={name} />
    </div>
  );
}

export function Greet({ fname }) {
  return <h2>Hello {fname}</h2>;
}

