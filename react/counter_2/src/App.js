import { Component } from "react";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    }
  }
  plus = () => {
    this.setState(state => ({
      num: state.num + 1
    }))
  }
  mines = () => {
    this.setState(state => ({
      num: state.num - 1
    }))
  }
  random = () => {
    this.setState(state => ({
      num: Math.round(-50 - 0.5 + Math.random() * (50 + 50 + 1))
    }))
  }
  reset = () => {
    this.setState(state => ({
      num: state.num = 0
    }))
  }
  // Используйте только стрелочную форму методов
  // Почему? Подробный ответ будет в следующем уроке
  
  render() {
    return (
      <div class="app">
        <div class="counter">{this.state.num}</div>
        <div class="controls">
          <button onClick={this.plus}>INC</button>
          <button onClick={this.mines}>DEC</button>
          <button onClick={this.random}>RND</button>
          <button onClick={this.reset}>RESET</button>
        </div>
      </div>
    )
  }
}

export default App;
