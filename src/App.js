// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
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

// export default App;


// import React from 'react'
// import "./App.css"
// import Nav from './Component/Nav'

// const App = () => {
//   return (
//     <div>
//       <Nav />
//     </div>
//   )
// }

// export default App
import React from "react";
import axios from 'axios'
import './App.css'

class App extends React.Component{
  state = { advice: ''};
  
  componentDidMount(){
    this.fetchAdvice();
  }  
  fetchAdvice = () => {
      axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;

      this.setState({ advice: advice});
      })
      .catch((error) => {
        console.log(error);
      });
    } 
  
  
  render() {
    const { advice } = this.state;
    return(
      <div className="App">
        <div className="Card">
          <h1 className="Heading text-3xl">{advice}</h1>
          <button className="Button" onClick={this.fetchAdvice}>
            <span className="text">Give Me Advice! </span>
          </button>
        </div>
      </div>
    )
  }
};

export default App