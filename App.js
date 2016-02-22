import React from 'react';
import ReactDom from 'react-dom';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      red: 0,
      green: 0,
      blue: 0
    }
    this.update = this.update.bind(this);
  }
  update(e){
    this.setState({
      red: ReactDom.findDOMNode(this.refs.red.refs.inp).value,
      green: ReactDom.findDOMNode(this.refs.green.refs.inp).value,
      blue: ReactDom.findDOMNode(this.refs.blue.refs.inp).value
    })
  }
  render() {
    return (
      <div>
        <Slider ref="red" RGBPart={this.state.red} update={this.update} />
        <br/>
        <Slider ref="green" RGBPart={this.state.green} update={this.update} />
        <br/>
        <Slider ref="blue" RGBPart={this.state.blue} update={this.update} />
      </div>
    );
  }
}

class Slider extends React.Component {
  render() {
    return (
      <div>
        {this.props.RGBPart}
        <br/>
        <input ref="inp" type="range"
          min="0"
          max="255"
          onChange={this.props.update} />
      </div>
    );
  }
}

ReactDom.render(
  <App cat={12} />, document.getElementById('app')
);

// export default App
