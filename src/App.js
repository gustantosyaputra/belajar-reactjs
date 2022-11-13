import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Komponen - properties
function Umur(props){
  return <span> berumur {props.age}</span>
}

function Greeting(props) {
  return <h1>Icikiwir {props.name} - <Umur age={props.age} /></h1>
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Greeting />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Greeting name="Roger Sumatera" age="40" />
        <Greeting name="Sigit Rendang" age="24" />
      </header>
    </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           halo semua ayo belajar React.js
//           <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
