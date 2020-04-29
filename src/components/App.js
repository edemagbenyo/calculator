import React from 'react';
import '../styles/App.scss';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidUpdate(){
    console.log(this.state);
  }
  handleClick(buttonName) {
    const result = calculate(this.state, buttonName);
    this.setState({ ...result });
  }

  render() {
    const { next, total } = this.state;
    return (
      <div className="App">
        <Display result={next || total} calculate={calculate} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
