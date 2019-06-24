import React from 'react';
import './App.css';

/* function Helloworld(props) {
  return (
    <div id="hello">{props.text}</div>
  );
} */

class Helloworld extends React.Component {

  state = {
    show: true
  }

  ocultar = () => {
    this.setState({show: !this.state.show})
  }

  render() {
    if (this.state.show) {
      return (
        <div id="hello">
          <h1>
            {this.props.text}
            <button onClick={this.ocultar}>Ocultar</button>
          </h1>
        </div>
      )
    }else{
      return <h1>
        There are no elements
        <button onClick={this.ocultar}>Ocultar</button>
      </h1> 
    }
  }
}

function App() {
  return (
    <div>
      This is my component: 
      <Helloworld text="Hello Nicolas"/>
    </div>
  );
}

export default App;
