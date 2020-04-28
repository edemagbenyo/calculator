import React from 'react';
import '../styles/App.scss';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state={
      total:null,
      next:null,
      operation:null
    }
    this.handleClick  = this.handleClick.bind(this)
  }
  handleClick(buttonName){
    const result = calculate(this.state, buttonName)
    this.setState({...result})
  }
  componentDidUpdate(){
    console.log(this.state);
  }
  render(){
    return (
      <div className="App">
        <Display result={this.state.next||this.state.total} calculate={calculate} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}

export default App;
